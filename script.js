const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const getPosthog = () =>
  typeof window !== "undefined" && typeof window.posthog?.capture === "function" ? window.posthog : null;

const trackEvent = (eventName, properties = {}) => {
  const posthog = getPosthog();
  if (!posthog) {
    return;
  }

  posthog.capture(eventName, properties);
};

const HERO_DEMO_EMBED_MESSAGE_TYPE = "aevra-demo-embed-analytics";
const HERO_DEMO_EMBED_STATE_REQUEST = "aevra-demo-embed-analytics-request-state";
const HERO_DEMO_SAVE_MESSAGE_TYPE = "nari-save";
const HERO_DEMO_STEPS_STORAGE_KEY = "nari_demo_steps";
const HERO_DEMO_STALL_MS = 15000;
const HERO_DEMO_SURFACE = "landing_page_hero";

const heroDemoAnalytics = {
  hasBeenViewed: false,
  isVisible: false,
  activeStep: null,
  stallTimerId: 0,
  startedSessionIds: new Set(),
  viewedStepKeys: new Set(),
};

const toRoundedNumber = (value, digits = 2) => {
  if (typeof value !== "number" || !Number.isFinite(value)) {
    return null;
  }

  return Number(value.toFixed(digits));
};

const enrichHeroDemoProperties = (properties = {}) => ({
  ...properties,
  embed_surface: HERO_DEMO_SURFACE,
  iframe_visible: heroDemoAnalytics.isVisible,
});

const clearHeroDemoStallTimer = () => {
  if (heroDemoAnalytics.stallTimerId) {
    window.clearTimeout(heroDemoAnalytics.stallTimerId);
    heroDemoAnalytics.stallTimerId = 0;
  }
};

const buildHeroDemoStepKey = (properties = {}) =>
  [
    properties.session_id || "no-session",
    properties.step_index || "no-step",
    properties.step_title || "untitled",
    properties.step_visit_number || 0,
  ].join(":");

const armHeroDemoStallTimer = () => {
  clearHeroDemoStallTimer();

  const activeStep = heroDemoAnalytics.activeStep;
  if (!activeStep || !heroDemoAnalytics.isVisible || activeStep.stallTracked) {
    return;
  }

  heroDemoAnalytics.stallTimerId = window.setTimeout(() => {
    const stepState = heroDemoAnalytics.activeStep;
    if (!stepState || stepState.stallTracked || !heroDemoAnalytics.isVisible) {
      return;
    }

    stepState.stallTracked = true;

    trackEvent(
      "hero demo embed step stalled",
      enrichHeroDemoProperties({
        ...stepState.properties,
        stall_threshold_ms: HERO_DEMO_STALL_MS,
        time_without_progress_ms: Date.now() - stepState.startedAt,
      })
    );
  }, HERO_DEMO_STALL_MS);
};

const trackHeroDemoEmbedEvent = (eventName, properties = {}) => {
  trackEvent(`hero demo embed ${eventName.replaceAll("_", " ")}`, enrichHeroDemoProperties(properties));
};

const syncHeroDemoStateFromEvent = (eventName, properties = {}) => {
  if (eventName === "session_started") {
    if (properties.session_id) {
      heroDemoAnalytics.startedSessionIds.add(properties.session_id);
    }
    return;
  }

  if (eventName === "session_resumed") {
    if (properties.session_id) {
      heroDemoAnalytics.startedSessionIds.add(properties.session_id);
    }
    return;
  }

  if (eventName === "step_viewed") {
    const stepKey = buildHeroDemoStepKey(properties);
    heroDemoAnalytics.viewedStepKeys.add(stepKey);
    heroDemoAnalytics.activeStep = {
      properties,
      startedAt: Date.now(),
      stallTracked: false,
    };
    armHeroDemoStallTimer();
    return;
  }

  if (eventName === "navigation_clicked" || eventName === "step_completed") {
    clearHeroDemoStallTimer();
    return;
  }

  if (eventName === "session_completed" || eventName === "session_exited") {
    clearHeroDemoStallTimer();
    heroDemoAnalytics.activeStep = null;
  }
};

const handleHeroDemoSnapshot = (properties = {}) => {
  if (!properties.session_id) {
    return;
  }

  if (!heroDemoAnalytics.startedSessionIds.has(properties.session_id)) {
    heroDemoAnalytics.startedSessionIds.add(properties.session_id);
    trackEvent(
      "hero demo embed session started",
      enrichHeroDemoProperties({
        ...properties,
        captured_from_snapshot: true,
      })
    );
  }

  if (!properties.tooltip_visible || typeof properties.step_index !== "number") {
    return;
  }

  const stepKey = buildHeroDemoStepKey(properties);
  if (heroDemoAnalytics.viewedStepKeys.has(stepKey)) {
    return;
  }

  heroDemoAnalytics.viewedStepKeys.add(stepKey);
  trackEvent(
    "hero demo embed step viewed",
    enrichHeroDemoProperties({
      ...properties,
      captured_from_snapshot: true,
    })
  );

  heroDemoAnalytics.activeStep = {
    properties,
    startedAt: Date.now(),
    stallTracked: false,
  };
  armHeroDemoStallTimer();
};

const handleHeroDemoSave = (steps, targetUrl) => {
  if (!Array.isArray(steps) || steps.length === 0) {
    return;
  }

  try {
    localStorage.setItem(HERO_DEMO_STEPS_STORAGE_KEY, JSON.stringify(steps));
  } catch {
    return;
  }

  trackEvent(
    "hero demo saved from landing page",
    enrichHeroDemoProperties({
      step_count: steps.length,
    })
  );

  if (heroDemoFrame) {
    heroDemoFrame.src = targetUrl || new URL("/demo/app.html", window.location.origin).href;
  }
};

const demoBookingLinks = Array.from(document.querySelectorAll('a[href*="calendly.com"]'));
demoBookingLinks.forEach((link) => {
  link.addEventListener("click", () => {
    trackEvent("demo booking clicked", { source: link.dataset.demoSource || "unknown" });
  });
});

const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

const progressBar = document.getElementById("scroll-progress");
const heroScrollCue = document.querySelector(".hero-scroll-cue");
if (progressBar) {
  const syncScrollUi = () => {
    const scrolled = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const pct = maxScroll > 0 ? (scrolled / maxScroll) * 100 : 0;
    progressBar.style.width = pct + "%";

    if (heroScrollCue) {
      heroScrollCue.classList.toggle("is-hidden", scrolled > 8);
    }
  };

  window.addEventListener(
    "scroll",
    syncScrollUi,
    { passive: true }
  );

  syncScrollUi();
}

const heroEls = Array.from(document.querySelectorAll("[data-hero-reveal]"));
heroEls.forEach((el, i) => {
  el.style.transitionDelay = `${i * 120}ms`;
});

const heroTypingHeading = document.querySelector("[data-hero-type]");
const runHeroTitleTyping = () => {
  if (!heroTypingHeading) {
    return;
  }

  const rawText = heroTypingHeading.dataset.heroType || heroTypingHeading.textContent.trim();
  const lineTexts = rawText
    .split("|")
    .map((line) => line.trim())
    .filter(Boolean);
  const text = lineTexts.join(" ");

  if (prefersReducedMotion || !text) {
    heroTypingHeading.textContent = "";
    lineTexts.forEach((lineText) => {
      const line = document.createElement("span");

      line.className = "hero-heading__line";
      line.textContent = lineText;
      heroTypingHeading.append(line);
    });
    return;
  }

  heroTypingHeading.setAttribute("aria-label", text);
  heroTypingHeading.classList.add("is-typing");
  heroTypingHeading.textContent = "";

  const characterEls = [];
  const renderTypingTokens = (container, lineText) => {
    const tokens = lineText.match(/\S+|\s+/g) || [];

    tokens.forEach((token) => {
      if (/^\s+$/.test(token)) {
        const space = document.createElement("span");

        space.className = "hero-heading__space";
        space.textContent = token;
        space.setAttribute("aria-hidden", "true");
        container.append(space);
        characterEls.push(space);
        return;
      }

      const word = document.createElement("span");
      word.className = "hero-heading__word";
      word.setAttribute("aria-hidden", "true");

      Array.from(token).forEach((character) => {
        const span = document.createElement("span");

        span.className = "hero-heading__char";
        span.textContent = character;
        word.append(span);
        characterEls.push(span);
      });

      container.append(word);
    });
  };

  lineTexts.forEach((lineText) => {
    const line = document.createElement("span");

    line.className = "hero-heading__line";
    heroTypingHeading.append(line);
    renderTypingTokens(line, lineText);
  });

  let index = 0;
  const typeNextCharacter = () => {
    if (index >= characterEls.length) {
      heroTypingHeading.classList.add("is-typing-complete");
      return;
    }

    const currentEl = characterEls[index];
    const current = currentEl.textContent || "";
    currentEl.classList.add("is-visible");
    index += 1;
    const delay = /^\s+$/.test(current) ? 76 : current === "." ? 320 : 82;
    window.setTimeout(typeNextCharacter, delay);
  };

  window.setTimeout(typeNextCharacter, 520);
};

const storyAnimationMedia = Array.from(
  document.querySelectorAll(".story-media--capture, .story-media--guidance, .story-media--memory")
);

if (!prefersReducedMotion) {
  const storyAnimationObserver = "IntersectionObserver" in window
    ? new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const media = entry.target;

          if (entry.isIntersecting) {
            media.restartStoryAnimation?.();
          } else {
            media.classList.remove("is-animating");
          }
        });
      },
      {
        threshold: 0.01,
        rootMargin: "0px",
      }
    )
    : null;

  storyAnimationMedia.forEach((media) => {
    const restartAnimation = () => {
      media.classList.remove("is-animating");
      void media.offsetWidth;
      media.classList.add("is-animating");
    };

    const resetAnimation = () => {
      media.classList.remove("is-animating");
    };

    media.restartStoryAnimation = restartAnimation;
    media.resetStoryAnimation = resetAnimation;

    if (storyAnimationObserver) {
      storyAnimationObserver.observe(media);
    } else {
      restartAnimation();
    }
  });
}

const heroDemoFrame = document.querySelector(".hero-fake-demo-frame");
const heroDemoBrowser = document.querySelector(".hero-fake-demo-browser");
const heroDemoContainer = document.querySelector(".hero-fake-demo");
const syncHeroDemoScale = () => {
  if (!heroDemoBrowser || !heroDemoContainer) {
    return;
  }

  const styles = getComputedStyle(heroDemoBrowser);
  const baseWidth = Number.parseFloat(styles.getPropertyValue("--hero-demo-base-width"));

  if (!baseWidth) {
    return;
  }

  const scale = Math.min(1, heroDemoContainer.clientWidth / baseWidth);
  heroDemoBrowser.style.setProperty("--hero-demo-scale", String(scale));
};

if (heroDemoBrowser && heroDemoContainer) {
  syncHeroDemoScale();

  if ("ResizeObserver" in window) {
    const heroDemoObserver = new ResizeObserver(() => {
      syncHeroDemoScale();
    });

    heroDemoObserver.observe(heroDemoContainer);
  } else {
    window.addEventListener("resize", syncHeroDemoScale, { passive: true });
  }
}

if (heroDemoFrame) {
  heroDemoFrame.addEventListener("load", () => {
    syncHeroDemoScale();
    trackEvent("hero demo iframe loaded", enrichHeroDemoProperties());

    try {
      heroDemoFrame.contentWindow?.postMessage({ type: HERO_DEMO_EMBED_STATE_REQUEST }, window.location.origin);
    } catch {
      // The iframe is same-origin in production; ignore local preview mismatches.
    }
  });
}

if (heroDemoContainer) {
  const heroDemoViewObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const isVisible = entry.isIntersecting && entry.intersectionRatio >= 0.45;
        heroDemoAnalytics.isVisible = isVisible;

        if (isVisible && !heroDemoAnalytics.hasBeenViewed) {
          heroDemoAnalytics.hasBeenViewed = true;
          trackEvent(
            "hero demo iframe viewed",
            enrichHeroDemoProperties({
              intersection_ratio: toRoundedNumber(entry.intersectionRatio),
            })
          );
        }

        if (isVisible) {
          armHeroDemoStallTimer();
        } else {
          clearHeroDemoStallTimer();
        }
      });
    },
    { threshold: [0.2, 0.45, 0.7] }
  );

  heroDemoViewObserver.observe(heroDemoContainer);
}

window.addEventListener("message", (event) => {
  if (!heroDemoFrame) {
    return;
  }

  if (event.origin !== window.location.origin) {
    return;
  }

  if (event.source !== heroDemoFrame.contentWindow) {
    return;
  }

  if (event.data?.type === HERO_DEMO_SAVE_MESSAGE_TYPE) {
    handleHeroDemoSave(event.data.steps, event.data.targetUrl);
    return;
  }

  if (event.data?.type !== HERO_DEMO_EMBED_MESSAGE_TYPE) {
    return;
  }

  const embedEventName = event.data.event;
  const properties = event.data.properties || {};

  if (!embedEventName) {
    return;
  }

  if (embedEventName === "state_snapshot") {
    handleHeroDemoSnapshot(properties);
    return;
  }

  trackHeroDemoEmbedEvent(embedEventName, properties);
  syncHeroDemoStateFromEvent(embedEventName, properties);
});

requestAnimationFrame(() => {
  requestAnimationFrame(() => {
    heroEls.forEach((el) => el.classList.add("is-visible"));
    runHeroTitleTyping();
  });
});

const revealEls = Array.from(document.querySelectorAll("[data-reveal]"));
const countUpEls = Array.from(document.querySelectorAll("[data-countup]"));
const animatedCountEls = new WeakSet();

if (!prefersReducedMotion) {
  countUpEls.forEach((countEl) => {
    const suffix = countEl.dataset.countupSuffix || "";
    countEl.textContent = `0${suffix}`;
  });
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");

        const countEl = entry.target.querySelector("[data-countup]");
        if (countEl && !animatedCountEls.has(countEl)) {
          const targetValue = Number(countEl.dataset.countupValue || "0");
          const suffix = countEl.dataset.countupSuffix || "";
          const duration = prefersReducedMotion ? 0 : 1200;

          animatedCountEls.add(countEl);

          if (!duration) {
            countEl.textContent = `${targetValue}${suffix}`;
          } else {
            const startTime = performance.now();
            const startValue = 0;

            const tick = (now) => {
              const progress = Math.min((now - startTime) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              const currentValue = Math.round(startValue + (targetValue - startValue) * eased);
              countEl.textContent = `${currentValue}${suffix}`;

              if (progress < 1) {
                requestAnimationFrame(tick);
              }
            };

            requestAnimationFrame(tick);
          }
        }

        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealEls.forEach((el) => revealObserver.observe(el));

const storyCards = Array.from(document.querySelectorAll(".story-card[data-reveal]"));
storyCards.forEach((el, i) => {
  el.style.transitionDelay = `${i * 110}ms`;
});

const useCaseTabs = Array.from(document.querySelectorAll("[data-use-case-tab]"));
const useCasePanels = Array.from(document.querySelectorAll("[data-use-case-panel]"));
const useCaseCopies = Array.from(document.querySelectorAll("[data-use-case-copy]"));
const useCaseSection = document.querySelector(".use-cases-section");
const pricingSwitch = document.querySelector("[data-pricing-switch]");
const pricingLabels = Array.from(document.querySelectorAll("[data-pricing-label]"));
const pricingValues = Array.from(document.querySelectorAll("[data-price-monthly]"));
const faqQuestions = Array.from(document.querySelectorAll(".faq-question"));
const contactForm = document.querySelector("[data-contact-form]");

if (useCaseTabs.length && useCasePanels.length && useCaseCopies.length) {
  const useCaseIds = useCaseTabs.map((tab) => tab.dataset.useCaseTab);
  let activeUseCaseId = useCaseIds[0];
  let useCaseScrollQueued = false;

  const activateUseCase = (id) => {
    if (!useCaseIds.includes(id) || activeUseCaseId === id) return;
    activeUseCaseId = id;

    useCaseTabs.forEach((tab) => {
      const active = tab.dataset.useCaseTab === id;
      tab.classList.toggle("is-active", active);
      tab.setAttribute("aria-selected", String(active));
    });

    useCasePanels.forEach((panel) => {
      const active = panel.dataset.useCasePanel === id;
      panel.classList.toggle("is-active", active);
      panel.setAttribute("aria-hidden", String(!active));
    });

    useCaseCopies.forEach((copy) => {
      copy.classList.toggle("is-active", copy.dataset.useCaseCopy === id);
    });
  };

  const getUseCaseScrollMetrics = () => {
    if (!useCaseSection) return null;

    const sectionTop = window.scrollY + useCaseSection.getBoundingClientRect().top;
    const scrollRange = Math.max(1, useCaseSection.offsetHeight - window.innerHeight);

    return { sectionTop, scrollRange };
  };

  const syncUseCaseToScroll = () => {
    useCaseScrollQueued = false;

    const metrics = getUseCaseScrollMetrics();
    if (!metrics) return;

    const rawProgress = (window.scrollY - metrics.sectionTop) / metrics.scrollRange;
    const progress = Math.min(0.999, Math.max(0, rawProgress));
    const nextIndex = Math.min(useCaseIds.length - 1, Math.floor(progress * useCaseIds.length));

    activateUseCase(useCaseIds[nextIndex]);
  };

  const requestUseCaseScrollSync = () => {
    if (useCaseScrollQueued) return;

    useCaseScrollQueued = true;
    requestAnimationFrame(syncUseCaseToScroll);
  };

  useCaseTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const targetId = tab.dataset.useCaseTab;
      const targetIndex = useCaseIds.indexOf(targetId);
      const metrics = getUseCaseScrollMetrics();

      if (metrics && targetIndex >= 0) {
        const segmentProgress = (targetIndex + 0.5) / useCaseIds.length;

        window.scrollTo({
          top: metrics.sectionTop + metrics.scrollRange * segmentProgress,
          behavior: "smooth",
        });
      }

      activateUseCase(targetId);
      trackEvent("use case tab clicked", { use_case: tab.dataset.useCaseTab });
    });
  });

  window.addEventListener("scroll", requestUseCaseScrollSync, { passive: true });
  window.addEventListener("resize", requestUseCaseScrollSync);
  requestUseCaseScrollSync();
}

if (pricingSwitch && pricingLabels.length && pricingValues.length) {
  const syncPricingMode = (yearly) => {
    pricingSwitch.classList.toggle("is-yearly", yearly);
    pricingSwitch.setAttribute("aria-checked", String(yearly));

    pricingLabels.forEach((label) => {
      const active = label.dataset.pricingLabel === (yearly ? "yearly" : "monthly");
      label.classList.toggle("is-active", active);
    });

    pricingValues.forEach((valueEl) => {
      valueEl.textContent = yearly ? valueEl.dataset.priceYearly : valueEl.dataset.priceMonthly;
    });
  };

  pricingSwitch.addEventListener("click", () => {
    const yearly = pricingSwitch.getAttribute("aria-checked") !== "true";
    syncPricingMode(yearly);
    trackEvent("pricing mode toggled", { billing_period: yearly ? "yearly" : "monthly" });
  });

  syncPricingMode(false);
}

if (faqQuestions.length) {
  faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
      const expanded = question.getAttribute("aria-expanded") === "true";
      const answer = question.nextElementSibling;

      question.setAttribute("aria-expanded", String(!expanded));

      if (answer) {
        answer.hidden = expanded;
      }

      if (!expanded) {
        trackEvent("faq item expanded", {
          question: question.querySelector("span")?.textContent?.trim(),
        });
      }
    });
  });
}

if (contactForm) {
  const nameInput = contactForm.querySelector("[data-contact-name]");
  const emailInput = contactForm.querySelector("[data-contact-email]");
  const messageInput = contactForm.querySelector("textarea[name='message']");
  const submitButton = contactForm.querySelector("[data-contact-submit]");
  const successMessage = contactForm.querySelector("[data-contact-success]");
  const errorEls = {
    name: contactForm.querySelector("[data-error-for='name']"),
    email: contactForm.querySelector("[data-error-for='email']"),
    message: contactForm.querySelector("[data-error-for='message']"),
  };

  const setFieldError = (field, key, message) => {
    field.classList.add("is-invalid");
    if (errorEls[key]) {
      errorEls[key].textContent = message;
      errorEls[key].hidden = false;
    }
  };

  const clearFieldError = (field, key) => {
    field.classList.remove("is-invalid");
    if (errorEls[key]) {
      errorEls[key].hidden = true;
    }
  };

  const validateContactForm = () => {
    let valid = true;
    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim().toLowerCase();
    const messageValue = messageInput.value.trim();
    const emailMatch = emailValue.match(/^[^\s@]+@([^\s@]+\.[a-z]{2,})$/i);

    clearFieldError(nameInput, "name");
    clearFieldError(emailInput, "email");
    clearFieldError(messageInput, "message");

    if (!nameValue) {
      setFieldError(nameInput, "name", "Please enter your name.");
      valid = false;
    }

    if (!emailValue) {
      setFieldError(emailInput, "email", "Please enter your work email.");
      valid = false;
    } else if (!emailMatch) {
      setFieldError(emailInput, "email", "Please enter a valid email with a real domain.");
      valid = false;
    }

    if (!messageValue) {
      setFieldError(messageInput, "message", "Please add a short message.");
      valid = false;
    }

    return valid;
  };

  [nameInput, emailInput, messageInput].forEach((field) => {
    field.addEventListener("input", () => {
      if (field === nameInput) clearFieldError(nameInput, "name");
      if (field === emailInput) clearFieldError(emailInput, "email");
      if (field === messageInput) clearFieldError(messageInput, "message");
    });
  });

  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!validateContactForm()) {
      return;
    }

    submitButton.classList.add("is-submitting");
    submitButton.textContent = "Sending...";

    try {
      const response = await fetch(contactForm.action, {
        method: "POST",
        body: new FormData(contactForm),
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      const submittedName = nameInput.value.trim();
      const submittedCompany = contactForm.querySelector("input[name='company']")?.value?.trim() || null;
      const submittedEmail = emailInput.value.trim().toLowerCase();
      const submittedEmailDomain = submittedEmail.split("@")[1] || null;

      submitButton.hidden = true;
      successMessage.hidden = false;
      contactForm.reset();

      trackEvent("contact form submitted", {
        company: submittedCompany,
        email_domain: submittedEmailDomain,
        has_company: Boolean(submittedCompany),
        lead_name_provided: Boolean(submittedName),
      });
    } catch (error) {
      submitButton.classList.remove("is-submitting");
      submitButton.textContent = "Send";
      setFieldError(messageInput, "message", "We could not send your request. Please try again.");
      trackEvent("contact form submission failed", {
        reason: error instanceof Error ? error.message : "unknown",
      });
    }
  });
}

if (!prefersReducedMotion) {
  const hero = document.getElementById("hero");
  const magnets = Array.from(document.querySelectorAll(".magnetic"));
  const integrationsOrbit = document.querySelector("[data-integrations-orbit]");
  const orbitBadges = integrationsOrbit ? Array.from(integrationsOrbit.querySelectorAll(".orbit-badge")) : [];

  magnets.forEach((btn) => {
    btn.addEventListener("pointermove", (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${(x * 0.15).toFixed(2)}px, ${(y * 0.15).toFixed(2)}px)`;
    });

    btn.addEventListener("pointerleave", () => {
      btn.style.transform = "";
    });
  });

  if (integrationsOrbit && orbitBadges.length) {
    integrationsOrbit.addEventListener("pointermove", (event) => {
      const rect = integrationsOrbit.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width - 0.5;
      const py = (event.clientY - rect.top) / rect.height - 0.5;

      integrationsOrbit.style.setProperty("--orbit-x", `${(px * 10).toFixed(2)}px`);
      integrationsOrbit.style.setProperty("--orbit-y", `${(py * 10).toFixed(2)}px`);

      orbitBadges.forEach((badge) => {
        const depth = Number(badge.dataset.depth || "1");
        const offsetX = px * 18 * depth;
        const offsetY = py * 18 * depth;
        badge.style.transform = `translate(calc(-50% + ${offsetX.toFixed(2)}px), calc(-50% + ${offsetY.toFixed(2)}px))`;
      });
    });

    integrationsOrbit.addEventListener("pointerleave", () => {
      integrationsOrbit.style.setProperty("--orbit-x", "0px");
      integrationsOrbit.style.setProperty("--orbit-y", "0px");

      orbitBadges.forEach((badge) => {
        badge.style.transform = "";
      });
    });
  }
}

(function heroThinkingCycle() {
  const el = document.querySelector(".hero-thinking");
  if (!el) return;

  const sentences = [
    "Learning context...",
    "Mapping your workflows...",
    "Spotting patterns...",
    "Connecting systems...",
    "Building memory...",
    "Tracing decisions...",
    "Recalling past runs...",
    "Inferring next steps...",
    "Reading between tools...",
    "Understanding intent...",
  ];

  function renderChars(text) {
    el.setAttribute("aria-label", text);
    el.textContent = "";
    Array.from(text).forEach((ch, i) => {
      const span = document.createElement("span");
      span.className = "hero-thinking__char";
      span.style.setProperty("--i", i);
      span.setAttribute("aria-hidden", "true");
      if (ch === " ") {
        span.innerHTML = "&nbsp;";
      } else {
        span.textContent = ch;
      }
      el.appendChild(span);
    });
  }

  let idx = 0;
  renderChars(sentences[idx]);

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reducedMotion) return;

  function advance() {
    el.dataset.state = "out";
    window.setTimeout(() => {
      idx = (idx + 1) % sentences.length;
      renderChars(sentences[idx]);
      el.dataset.state = "in";
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          delete el.dataset.state;
        });
      });
    }, 500);
  }

  window.setInterval(advance, 5000);
})();

(function closingFormBehavior() {
  const form = document.querySelector("[data-closing-form]");
  if (!form) return;
  const input = form.querySelector("[data-rotating-placeholder]");
  const status = form.querySelector("[data-closing-status]");
  const submit = form.querySelector("[data-closing-submit]");

  const workflows = [
    "Submitting weekly timesheets and expense reports",
    "Checking invoices against PO, VAT, and payment terms",
    "Updating inventory across warehouse and ERP portals",
    "Reviewing receipts and flagging missing expense info",
    "Reconciling supplier invoices in the finance system",
    "Validating new vendor data before approval",
    "Posting daily stock movements to the internal portal",
    "Approving consultant hours across multiple projects",
    "Closing expense reports in the HR portal",
    "Logging maintenance jobs across warehouse systems",
  ];

  if (input) {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      input.placeholder = workflows[0] + "...";
    } else {
      let workflowIdx = 0;
      let timeoutId = 0;

      const userBusy = () =>
        input.value.trim().length > 0 || document.activeElement === input;

      const schedule = (fn, delay) => {
        timeoutId = window.setTimeout(fn, delay);
      };

      function startTyping() {
        if (userBusy()) {
          schedule(startTyping, 1200);
          return;
        }

        const current = workflows[workflowIdx];
        let charIdx = 0;
        input.placeholder = "";

        function typeChar() {
          if (userBusy()) {
            schedule(startTyping, 1500);
            return;
          }
          if (charIdx < current.length) {
            charIdx += 1;
            input.placeholder = current.substring(0, charIdx);
            schedule(typeChar, 38 + Math.random() * 36);
          } else {
            schedule(() => {
              input.placeholder = current + ".";
              schedule(() => {
                input.placeholder = current + "..";
                schedule(() => {
                  input.placeholder = current + "...";
                  schedule(startBackspace, 2400);
                }, 220);
              }, 220);
            }, 260);
          }
        }

        typeChar();
      }

      function startBackspace() {
        if (userBusy()) {
          schedule(startBackspace, 1200);
          return;
        }

        function eraseChar() {
          if (userBusy()) {
            schedule(startTyping, 1500);
            return;
          }
          const current = input.placeholder;
          if (current.length > 0) {
            input.placeholder = current.slice(0, -1);
            schedule(eraseChar, 22 + Math.random() * 18);
          } else {
            workflowIdx = (workflowIdx + 1) % workflows.length;
            schedule(startTyping, 320);
          }
        }

        eraseChar();
      }

      schedule(startTyping, 500);
    }
  }

  const modal = document.querySelector("[data-contact-modal]");
  const modalForm = document.querySelector("[data-contact-modal-form]");
  const modalWorkflowField = document.querySelector("[data-modal-workflow-field]");
  const modalFormView = document.querySelector('[data-modal-view="form"]');
  const modalSuccessView = document.querySelector('[data-modal-view="success"]');
  const modalSubmitBtn = document.querySelector("[data-modal-submit]");
  let lastFocused = null;

  function openModal(prefillValue) {
    if (!modal) return;
    lastFocused = document.activeElement;
    if (modalWorkflowField) {
      modalWorkflowField.value = prefillValue || "";
    }
    if (modalFormView) modalFormView.hidden = false;
    if (modalSuccessView) modalSuccessView.hidden = true;
    if (modalSubmitBtn) {
      modalSubmitBtn.disabled = false;
      modalSubmitBtn.textContent = "Get in touch";
    }
    modal.hidden = false;
    modal.setAttribute("aria-hidden", "false");
    document.documentElement.style.overflow = "hidden";
    window.setTimeout(() => {
      const firstField = modal.querySelector("input, select, textarea");
      if (firstField) firstField.focus();
    }, 80);
  }

  function closeModal() {
    if (!modal) return;
    modal.hidden = true;
    modal.setAttribute("aria-hidden", "true");
    document.documentElement.style.overflow = "";
    if (lastFocused && typeof lastFocused.focus === "function") {
      lastFocused.focus();
    }
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!input || !input.value.trim()) return;
    openModal(input.value.trim());
  });

  if (modal) {
    modal.querySelectorAll("[data-contact-close]").forEach((el) => {
      el.addEventListener("click", closeModal);
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !modal.hidden) closeModal();
    });
  }

  if (modalForm) {
    const requiredFields = modalForm.querySelectorAll("[required]");

    requiredFields.forEach((field) => {
      const clear = () => {
        if (field.value && field.value.trim()) field.classList.remove("is-invalid");
      };
      field.addEventListener("input", clear);
      field.addEventListener("change", clear);
    });

    modalForm.addEventListener("submit", (event) => {
      event.preventDefault();

      let firstInvalid = null;
      requiredFields.forEach((field) => {
        const value = (field.value || "").trim();
        const valid = field.tagName === "SELECT" ? value !== "" : value.length > 0;
        if (!valid) {
          field.classList.add("is-invalid");
          if (!firstInvalid) firstInvalid = field;
        } else {
          field.classList.remove("is-invalid");
        }
      });

      if (firstInvalid) {
        firstInvalid.focus();
        return;
      }

      if (modalSubmitBtn) {
        modalSubmitBtn.disabled = true;
        modalSubmitBtn.textContent = "Sending...";
      }
      const formData = new FormData(modalForm);
      fetch(modalForm.action.replace("formsubmit.co/", "formsubmit.co/ajax/"), {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      })
        .then((response) => {
          if (!response.ok) throw new Error("Network");
          return response.json();
        })
        .then(() => {
          if (modalFormView) modalFormView.hidden = true;
          if (modalSuccessView) modalSuccessView.hidden = false;
          if (input) input.value = "";
          modalForm.reset();
        })
        .catch(() => {
          if (modalSubmitBtn) {
            modalSubmitBtn.disabled = false;
            modalSubmitBtn.textContent = "Try again";
          }
        });
    });
  }
})();

(function pageDotSpotlight() {
  const layer = document.querySelector(".page-dots");
  if (!layer) return;

  let targetX = 50;
  let targetY = 50;
  let currentX = 50;
  let currentY = 50;
  let rafId = 0;
  let running = false;

  function tick() {
    const ease = 0.16;
    currentX += (targetX - currentX) * ease;
    currentY += (targetY - currentY) * ease;
    layer.style.setProperty("--mouse-x", currentX.toFixed(2) + "%");
    layer.style.setProperty("--mouse-y", currentY.toFixed(2) + "%");

    if (Math.abs(targetX - currentX) > 0.05 || Math.abs(targetY - currentY) > 0.05) {
      rafId = window.requestAnimationFrame(tick);
    } else {
      running = false;
    }
  }

  function start() {
    if (running) return;
    running = true;
    rafId = window.requestAnimationFrame(tick);
  }

  window.addEventListener("pointermove", (event) => {
    targetX = (event.clientX / window.innerWidth) * 100;
    targetY = (event.clientY / window.innerHeight) * 100;
    start();
  });
})();

(function heroChatBehavior() {
  const root = document.querySelector("[data-hero-chat]");
  if (!root) return;

  const form = root.querySelector("[data-chat-form]");
  const input = root.querySelector("[data-chat-input]");
  const submit = root.querySelector("[data-chat-submit]");
  const thread = root.querySelector("[data-chat-thread]");
  const closeBtn = document.querySelector("[data-chat-close]");
  const suggestions = document.querySelector("[data-chat-suggestions]");
  const reset = document.querySelector("[data-chat-close]");
  const pills = document.querySelectorAll("[data-chat-pill]");

  const WORKFLOWS = {
    timesheet: {
      prompt:
        "Submit my weekly timesheet — full days at Client A from Monday to Thursday, half day Friday morning. Receipts are in the attached zip.",
      card: {
        title: "Weekly Timesheet + Expenses",
        meta: "12 nodes · recorded by Marco · timesheet.company.local",
      },
      reasoning: [
        "Reading your request",
        "Opening attached zip · extracted 12 receipts",
        "Parsing receipt dates and amounts · €487 total",
        "Resolving Client A in billable project list",
        "Mapping schedule · Mon to Thu full · Friday half day",
        "Sequencing workflow execution",
      ],
      graph: {
        nodes: [
          { id: "n1",  title: "Open portal",       meta: "timesheet.company.local", col: 0, row: 0 },
          { id: "n2",  title: "Authenticate",      meta: "SSO · session token",     col: 1, row: 0 },
          { id: "n3",  title: "Load schedule",     meta: "consultant calendar",     col: 2, row: -1 },
          { id: "n4",  title: "Load clients",      meta: "billable project list",   col: 2, row: 1 },
          { id: "n5",  title: "Fill Mon to Thu",   meta: "4 × 8.0h",                col: 3, row: -1 },
          { id: "n6",  title: "Fill Friday",       meta: "half day · 4.0h",         col: 3, row: 0 },
          { id: "n7",  title: "Match client code", meta: "billable assignment",     col: 3, row: 1 },
          { id: "n8",  title: "Policy check",      meta: "limits · overtime",       col: 4, row: 0 },
          { id: "n9",  title: "Attach receipts",   meta: "3 files",                 col: 5, row: -1 },
          { id: "n10", title: "Categorize",        meta: "expense codes",           col: 5, row: 1 },
          { id: "n11", title: "Validate totals",   meta: "36h + expenses",          col: 6, row: 0 },
          { id: "n12", title: "Submit + route",    meta: "approver assigned",       col: 7, row: 0 },
        ],
        edges: [
          { from: "n1",  to: "n2"  },
          { from: "n2",  to: "n3"  },
          { from: "n2",  to: "n4"  },
          { from: "n3",  to: "n5"  },
          { from: "n3",  to: "n6"  },
          { from: "n4",  to: "n7"  },
          { from: "n5",  to: "n8"  },
          { from: "n6",  to: "n8"  },
          { from: "n7",  to: "n8"  },
          { from: "n8",  to: "n9"  },
          { from: "n8",  to: "n10" },
          { from: "n9",  to: "n11" },
          { from: "n10", to: "n11" },
          { from: "n11", to: "n12" },
        ],
      },
      narration:
        "Done. I just ran your weekly timesheet on the internal portal — pulled your schedule and the billable client list at the same time, filled Monday through Friday, ran the policy and overtime check, sorted out the receipts, and routed everything to your approver for sign-off. About 28 seconds.",
    },
    production: {
      prompt:
        "Close the production report for Line 3's morning shift — pull output, downtime, and quality data from the MES and post the OEE to SAP.",
      card: {
        title: "End of shift production report",
        meta: "12 nodes · recorded by Alessia · MES portal · Line 3",
      },
      reasoning: [
        "Reading your request",
        "Locating Line 3 · morning shift in MES",
        "Loading production plan · target 1,500 units",
        "Connecting PLC tag channels + downtime log",
        "Sequencing parallel reporting lanes",
      ],
      graph: {
        nodes: [
          { id: "n1",  title: "Open MES portal", meta: "mes.factory.local",   col: 0, row: 0 },
          { id: "n2",  title: "Authenticate",    meta: "factory account",     col: 1, row: 0 },
          { id: "n3",  title: "Select shift",    meta: "Line 3 · 06–14h",     col: 2, row: 0 },
          { id: "n4",  title: "Load plan",       meta: "1,500 units target",  col: 3, row: 0 },
          { id: "n5",  title: "Read output",     meta: "OEE counter",         col: 4, row: -1 },
          { id: "n6",  title: "Read PLC tags",   meta: "4 channels",          col: 4, row: 0 },
          { id: "n7",  title: "Read downtime",   meta: "cause-coded events",  col: 4, row: 1 },
          { id: "n8",  title: "Compute units",   meta: "1,240 good · 18 scrap", col: 5, row: -1 },
          { id: "n9",  title: "Tag quality lot", meta: "12 rejected",         col: 5, row: 0 },
          { id: "n10", title: "Total downtime",  meta: "37 min · 2 causes",   col: 5, row: 1 },
          { id: "n11", title: "Compute OEE",     meta: "0.84 vs plan",        col: 6, row: 0 },
          { id: "n12", title: "Post to SAP MII", meta: "shift closed",        col: 7, row: 0 },
        ],
        edges: [
          { from: "n1",  to: "n2"  },
          { from: "n2",  to: "n3"  },
          { from: "n3",  to: "n4"  },
          { from: "n4",  to: "n5"  },
          { from: "n4",  to: "n6"  },
          { from: "n4",  to: "n7"  },
          { from: "n5",  to: "n8"  },
          { from: "n6",  to: "n9"  },
          { from: "n7",  to: "n10" },
          { from: "n8",  to: "n11" },
          { from: "n9",  to: "n11" },
          { from: "n10", to: "n11" },
          { from: "n11", to: "n12" },
        ],
      },
      narration:
        "Shift closed. I went into the MES, pulled today's production plan, then captured the output counters, the PLC tag readings, and the downtime events in parallel. OEE came out at 0.84 against plan, and the closed report is posted to SAP MII. About 32 seconds.",
    },
    inventory: {
      prompt:
        "Run today's reconciliation for aisle B — adjust SAP if anything is outside tolerance and send the audit log to the warehouse controller.",
      card: {
        title: "Daily inventory reconciliation",
        meta: "12 nodes · recorded by Paolo · WMS + SAP MM",
      },
      reasoning: [
        "Reading your request",
        "Locating aisle B in WMS · 184 SKUs",
        "Opening SAP MM session for MMBE",
        "Loading SKU master + UoM conversion tables",
        "Sequencing dual-lane reconciliation",
      ],
      graph: {
        nodes: [
          { id: "n1",  title: "Open WMS",         meta: "warehouse.local",    col: 0, row: 0 },
          { id: "n2",  title: "Authenticate",     meta: "supervisor login",   col: 1, row: 0 },
          { id: "n3",  title: "Select zone",      meta: "aisle B · 184 SKUs", col: 2, row: -1 },
          { id: "n4",  title: "Open SAP MMBE",    meta: "MM module",          col: 2, row: 1 },
          { id: "n5",  title: "Scan SKUs",        meta: "scanner sweep",      col: 3, row: -1 },
          { id: "n6",  title: "Pull SAP totals",  meta: "stock by SKU",       col: 3, row: 1 },
          { id: "n7",  title: "Aggregate counts", meta: "by lot + batch",     col: 4, row: -1 },
          { id: "n8",  title: "Map identifiers",  meta: "UoM conversion",     col: 4, row: 1 },
          { id: "n9",  title: "Compare ±0.5%",    meta: "tolerance match",    col: 5, row: 0 },
          { id: "n10", title: "Flag variances",   meta: "7 SKUs · ± units",   col: 6, row: 0 },
          { id: "n11", title: "MIGO adjustment",  meta: "SAP movement",       col: 7, row: -0.5 },
          { id: "n12", title: "Audit report",     meta: "PDF + signed log",   col: 7, row: 0.5 },
        ],
        edges: [
          { from: "n1",  to: "n2"  },
          { from: "n2",  to: "n3"  },
          { from: "n2",  to: "n4"  },
          { from: "n3",  to: "n5"  },
          { from: "n4",  to: "n6"  },
          { from: "n5",  to: "n7"  },
          { from: "n6",  to: "n8"  },
          { from: "n7",  to: "n9"  },
          { from: "n8",  to: "n9"  },
          { from: "n9",  to: "n10" },
          { from: "n10", to: "n11" },
          { from: "n10", to: "n12" },
        ],
      },
      narration:
        "Reconciliation done. I ran the cycle count in the warehouse and pulled stock from SAP at the same time, compared everything within a half-percent tolerance, and found seven SKUs out of line. Those went straight into a MIGO adjustment in SAP, and I dropped a signed PDF audit log for the controller. About 48 seconds.",
    },
    invoice: {
      prompt:
        "Post supplier invoice INV-2048 from Acme — €18,420 against PO 77819. Goods came in last Tuesday, please run the 3-way match.",
      card: {
        title: "Supplier invoice posting",
        meta: "14 nodes · recorded by Pasquale · SAP MIRO + FB60",
      },
      reasoning: [
        "Reading your request",
        "Locating invoice INV-2048 in MIRO queue",
        "Confirming vendor Acme · tax ID match",
        "Locating PO 77819 + goods receipt 5001 2881",
        "Sequencing 3-way match execution",
      ],
      graph: {
        nodes: [
          { id: "n1",  title: "Open SAP MIRO",     meta: "invoice queue",       col: 0, row: 0 },
          { id: "n2",  title: "Pick from queue",   meta: "INV-2048 · 18,420 €", col: 1, row: 0 },
          { id: "n3",  title: "Parse PDF",         meta: "OCR + field extract", col: 2, row: 0 },
          { id: "n4",  title: "Vendor data",       meta: "tax ID · address",    col: 3, row: -1 },
          { id: "n5",  title: "PO reference",      meta: "PO-77819",            col: 3, row: 0 },
          { id: "n6",  title: "Amount + VAT",      meta: "header values",       col: 3, row: 1 },
          { id: "n7",  title: "Identify vendor",   meta: "vendor master",       col: 4, row: -1 },
          { id: "n8",  title: "Match PO lines",    meta: "ERP cross-check",     col: 4, row: 0 },
          { id: "n9",  title: "Verify VAT rate",   meta: "IT · 22%",            col: 4, row: 1 },
          { id: "n10", title: "3-way match",       meta: "PO + GR + invoice",   col: 5, row: 0 },
          { id: "n11", title: "Compute due date",  meta: "net-30 · bank days",  col: 6, row: -0.5 },
          { id: "n12", title: "Route approval",    meta: ">10k → CFO",          col: 6, row: 0.5 },
          { id: "n13", title: "Receive sign-off",  meta: "CFO · digital sig",   col: 7, row: 0 },
          { id: "n14", title: "Post to FB60",      meta: "GL booked",           col: 8, row: 0 },
        ],
        edges: [
          { from: "n1",  to: "n2"  },
          { from: "n2",  to: "n3"  },
          { from: "n3",  to: "n4"  },
          { from: "n3",  to: "n5"  },
          { from: "n3",  to: "n6"  },
          { from: "n4",  to: "n7"  },
          { from: "n5",  to: "n8"  },
          { from: "n6",  to: "n9"  },
          { from: "n7",  to: "n10" },
          { from: "n8",  to: "n10" },
          { from: "n9",  to: "n10" },
          { from: "n10", to: "n11" },
          { from: "n10", to: "n12" },
          { from: "n11", to: "n13" },
          { from: "n12", to: "n13" },
          { from: "n13", to: "n14" },
        ],
      },
      narration:
        "Invoice posted. I picked INV-2048 out of the MIRO queue, parsed the PDF, and ran the vendor identity, PO match and VAT check side by side — then did a proper three-way match. The CFO signed it off after routing, and it's now booked in FB60 and archived. About 36 seconds.",
    },
  };

  const FALLBACK = {
    card: {
      title: "Your workflow",
      meta: "not recorded yet · capture once, then re-run on demand",
    },
    reasoning: [
      "Reading your description",
      "Identifying systems to record across",
      "Drafting a capture plan",
      "Estimating node count",
    ],
    graph: {
      nodes: [
        { id: "n1", title: "Open software",          meta: "no setup · no API",         col: 0, row: 0 },
        { id: "n2", title: "Authenticate",           meta: "your existing access",      col: 1, row: 0 },
        { id: "n3", title: "Run workflow",           meta: "you do it once",            col: 2, row: 0 },
        { id: "n4", title: "Aevra records",          meta: "clicks · inputs · outcomes", col: 3, row: 0 },
        { id: "n5", title: "Structure as procedure", meta: "steps + guardrails",        col: 4, row: 0 },
        { id: "n6", title: "Review + save",          meta: "name + share",              col: 5, row: 0 },
        { id: "n7", title: "Re-run with new data",   meta: "callable · auditable",      col: 6, row: 0 },
      ],
      edges: [
        { from: "n1", to: "n2" },
        { from: "n2", to: "n3" },
        { from: "n3", to: "n4" },
        { from: "n4", to: "n5" },
        { from: "n5", to: "n6" },
        { from: "n6", to: "n7" },
      ],
    },
    narration:
      "Here's how it works: you run the workflow once in the software you already use — I'll watch and record every step. After a quick review, the procedure is saved and I can run it for you, with new data, anytime. No setup. No API. No migration.",
  };

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let busy = false;

  function setBusy(state) {
    busy = state;
    root.dataset.busy = state ? "true" : "false";
    if (submit) submit.disabled = state || !input.value.trim();
    if (input) input.disabled = state;
  }

  function activate() {
    if (root.dataset.state === "active") return;
    root.dataset.state = "active";
    if (suggestions) suggestions.dataset.state = "hidden";
    if (reset) reset.dataset.state = "visible";
  }

  function resetChat() {
    if (busy) return;
    root.dataset.state = "resting";
    if (suggestions) delete suggestions.dataset.state;
    if (reset) delete reset.dataset.state;
    if (thread) thread.innerHTML = "";
    if (input) {
      input.value = "";
      if (submit) submit.disabled = true;
    }
  }

  function scrollToBottom() {
    if (!thread) return;
    requestAnimationFrame(() => {
      thread.scrollTop = thread.scrollHeight;
    });
  }

  const delay = (ms) =>
    new Promise((resolve) => window.setTimeout(resolve, reduceMotion ? Math.min(ms, 60) : ms));

  function appendUserMessage(text) {
    const wrap = document.createElement("div");
    wrap.className = "hero-chat__msg hero-chat__msg--user";
    const bubble = document.createElement("div");
    bubble.className = "hero-chat__msg-bubble";
    bubble.textContent = text;
    wrap.appendChild(bubble);
    thread.appendChild(wrap);
    scrollToBottom();
  }

  function buildAssistantBody() {
    const wrap = document.createElement("div");
    wrap.className = "hero-chat__msg hero-chat__msg--assistant";
    const body = document.createElement("div");
    body.className = "hero-chat__msg-body";
    wrap.appendChild(body);
    thread.appendChild(wrap);
    return body;
  }

  function buildWorkflowCard(body, card) {
    if (!card) return;
    const wrap = document.createElement("div");
    wrap.className = "hero-chat__workflow-card";

    const icon = document.createElement("span");
    icon.className = "hero-chat__workflow-icon";
    icon.setAttribute("aria-hidden", "true");
    icon.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M8 5v14l11-7z"/></svg>';

    const info = document.createElement("div");
    info.className = "hero-chat__workflow-info";

    const title = document.createElement("span");
    title.className = "hero-chat__workflow-title";
    title.textContent = card.title;

    const meta = document.createElement("span");
    meta.className = "hero-chat__workflow-meta";
    meta.textContent = card.meta;

    info.appendChild(title);
    info.appendChild(meta);
    wrap.appendChild(icon);
    wrap.appendChild(info);
    body.appendChild(wrap);
  }

  function buildSummary(body, text) {
    if (!text) return;
    const el = document.createElement("p");
    el.className = "hero-chat__summary";
    el.textContent = text;
    body.appendChild(el);
  }

  function buildReasoning(body, steps) {
    const block = document.createElement("div");
    block.className = "hero-chat__reasoning";

    const stepEls = steps.map((stepText) => {
      const step = document.createElement("div");
      step.className = "hero-chat__reasoning-step";

      const bullet = document.createElement("span");
      bullet.className = "hero-chat__reasoning-bullet";

      const text = document.createElement("span");
      text.className = "hero-chat__reasoning-text";
      text.textContent = stepText;

      step.appendChild(bullet);
      step.appendChild(text);
      block.appendChild(step);
      return step;
    });

    body.appendChild(block);
    return stepEls;
  }

  async function runReasoning(stepEls) {
    for (let i = 0; i < stepEls.length; i += 1) {
      const el = stepEls[i];
      el.dataset.state = "active";
      scrollToBottom();
      await delay(580 + Math.random() * 320);
      el.dataset.state = "done";
    }
  }

  const GRAPH = {
    NODE_W: 156,
    NODE_H: 62,
    COL_GAP: 36,
    ROW_GAP: 28,
    VIEWPORT_H: 360,
    EDGE_PADDING: 96,
    NODE_RUN_MS_MIN: 680,
    NODE_RUN_MS_MAX: 1080,
    EDGE_SPEED: 0.82,
    EDGE_MS_MIN: 720,
    EDGE_MS_MAX: 1400,
    MATERIALIZE_FADE_MS: 540,
    TARGET_REVEAL_AT: 0.62,
  };

  function buildGraph(body, graph) {
    const { NODE_W, NODE_H, COL_GAP, ROW_GAP, VIEWPORT_H } = GRAPH;
    const COL_UNIT = NODE_W + COL_GAP;
    const ROW_UNIT = NODE_H + ROW_GAP;

    const rows = graph.nodes.map((n) => n.row);
    const cols = graph.nodes.map((n) => n.col);
    const minRow = Math.min(...rows);
    const maxRow = Math.max(...rows);
    const maxCol = Math.max(...cols);

    const canvasW = maxCol * COL_UNIT + NODE_W;
    const canvasH = (maxRow - minRow) * ROW_UNIT + NODE_H;

    const container = document.createElement("div");
    container.className = "hero-chat__graph";

    const viewport = document.createElement("div");
    viewport.className = "hero-chat__graph-viewport";
    viewport.style.height = VIEWPORT_H + "px";
    container.appendChild(viewport);

    const canvas = document.createElement("div");
    canvas.className = "hero-chat__graph-canvas";
    canvas.style.width = canvasW + "px";
    canvas.style.height = canvasH + "px";
    viewport.appendChild(canvas);

    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.classList.add("hero-chat__graph-svg");
    svg.setAttribute("width", String(canvasW));
    svg.setAttribute("height", String(canvasH));
    svg.setAttribute("viewBox", `0 0 ${canvasW} ${canvasH}`);
    canvas.appendChild(svg);

    const nodeMap = new Map();
    graph.nodes.forEach((node, i) => {
      const x = node.col * COL_UNIT;
      const y = (node.row - minRow) * ROW_UNIT;

      const el = document.createElement("div");
      el.className = "hero-chat__graph-node";
      el.dataset.state = "pending";
      el.style.left = x + "px";
      el.style.top = y + "px";
      el.style.width = NODE_W + "px";
      el.style.height = NODE_H + "px";

      const num = document.createElement("span");
      num.className = "hero-chat__graph-num";
      num.textContent = String(i + 1).padStart(2, "0");
      el.appendChild(num);

      const title = document.createElement("span");
      title.className = "hero-chat__graph-title";
      title.textContent = node.title;
      el.appendChild(title);

      const meta = document.createElement("span");
      meta.className = "hero-chat__graph-meta";
      meta.textContent = node.meta || "";
      el.appendChild(meta);

      nodeMap.set(node.id, { node, x, y, el, materialized: false });
    });

    const edgeMap = new Map();
    graph.edges.forEach((edge) => {
      const src = nodeMap.get(edge.from);
      const tgt = nodeMap.get(edge.to);
      if (!src || !tgt) return;

      const sx = src.x + NODE_W;
      const sy = src.y + NODE_H / 2;
      const tx = tgt.x;
      const ty = tgt.y + NODE_H / 2;

      const dx = tx - sx;
      const offset = Math.min(Math.abs(dx) * 0.5 - 6, Math.max(20, Math.abs(dx) * 0.42));
      const d = `M ${sx.toFixed(2)},${sy.toFixed(2)} C ${(sx + offset).toFixed(2)},${sy.toFixed(2)} ${(tx - offset).toFixed(2)},${ty.toFixed(2)} ${tx.toFixed(2)},${ty.toFixed(2)}`;

      const path = document.createElementNS(svgNS, "path");
      path.classList.add("hero-chat__graph-edge");
      path.setAttribute("d", d);

      edgeMap.set(edge, { edge, path, length: 0, materialized: false, canvas });
    });

    body.appendChild(container);

    const panState = attachPanning(viewport, canvas, canvasW, canvasH);

    return {
      container, viewport, canvas, svg,
      nodeMap, edgeMap,
      canvasW, canvasH,
      panState,
    };
  }

  function attachPanning(viewport, canvas, canvasW, canvasH) {
    const state = { interactive: false, drag: null };
    const PAD = GRAPH.EDGE_PADDING;

    function clampTransform(tx, ty) {
      const vw = viewport.offsetWidth;
      const vh = viewport.offsetHeight;
      if (canvasW > vw - PAD * 2) {
        tx = Math.max(vw - canvasW - PAD, Math.min(PAD, tx));
      } else {
        tx = (vw - canvasW) / 2;
      }
      if (canvasH > vh - PAD * 2) {
        ty = Math.max(vh - canvasH - PAD, Math.min(PAD, ty));
      } else {
        ty = (vh - canvasH) / 2;
      }
      return { tx, ty };
    }

    function getCurrentTransform() {
      const tr = canvas.style.transform || "";
      const m = tr.match(/translate\(\s*(-?[\d.]+)px,\s*(-?[\d.]+)px\)/);
      return m ? { tx: parseFloat(m[1]), ty: parseFloat(m[2]) } : { tx: 0, ty: 0 };
    }

    viewport.addEventListener("pointerdown", (e) => {
      if (!state.interactive) return;
      e.preventDefault();
      const { tx, ty } = getCurrentTransform();
      state.drag = { startX: e.clientX, startY: e.clientY, tx0: tx, ty0: ty };
      canvas.style.transition = "none";
      viewport.style.cursor = "grabbing";
      try { viewport.setPointerCapture(e.pointerId); } catch (_) {}
    });

    viewport.addEventListener("pointermove", (e) => {
      if (!state.drag) return;
      const dx = e.clientX - state.drag.startX;
      const dy = e.clientY - state.drag.startY;
      const { tx, ty } = clampTransform(state.drag.tx0 + dx, state.drag.ty0 + dy);
      canvas.style.transform = `translate(${tx}px, ${ty}px)`;
    });

    function endDrag() {
      if (!state.drag) return;
      state.drag = null;
      viewport.style.cursor = state.interactive ? "grab" : "default";
      canvas.style.transition = "";
    }

    viewport.addEventListener("pointerup", endDrag);
    viewport.addEventListener("pointercancel", endDrag);

    return {
      enable() {
        state.interactive = true;
        viewport.style.cursor = "grab";
      },
      clampTransform,
    };
  }

  async function runGraph(graph, graphCtx) {
    const { nodeMap, edgeMap, canvas, viewport, svg, canvasW, canvasH, panState } = graphCtx;
    const { NODE_W, NODE_H, EDGE_PADDING } = GRAPH;

    const incomingTracker = new Map();
    graph.nodes.forEach((n) => {
      const count = graph.edges.filter((e) => e.to === n.id).length;
      incomingTracker.set(n.id, { needed: count, drawn: 0 });
    });

    const roots = graph.nodes.filter(
      (n) => !graph.edges.some((e) => e.to === n.id)
    );

    // ── Camera follow ──────────────────────────────────────────────
    const recentTargets = [];
    const RECENT_MS = 800;

    function applyCamera(cx, cy) {
      const vw = viewport.offsetWidth;
      const vh = viewport.offsetHeight;
      const PAD = EDGE_PADDING;
      let tx, ty;
      if (canvasW <= vw - PAD * 2) {
        tx = (vw - canvasW) / 2;
      } else {
        tx = Math.max(vw - canvasW - PAD, Math.min(PAD, vw / 2 - cx));
      }
      if (canvasH <= vh - PAD * 2) {
        ty = (vh - canvasH) / 2;
      } else {
        ty = Math.max(vh - canvasH - PAD, Math.min(PAD, vh / 2 - cy));
      }
      canvas.style.transform = `translate(${tx}px, ${ty}px)`;
    }

    function followTo(nodeId) {
      const now = performance.now();
      recentTargets.push({ nodeId, time: now });
      while (recentTargets.length > 0 && now - recentTargets[0].time > RECENT_MS) {
        recentTargets.shift();
      }
      let sumX = 0, sumY = 0;
      for (const { nodeId: id } of recentTargets) {
        const e = nodeMap.get(id);
        sumX += e.x + NODE_W / 2;
        sumY += e.y + NODE_H / 2;
      }
      const cx = sumX / recentTargets.length;
      const cy = sumY / recentTargets.length;
      applyCamera(cx, cy);
    }

    // ── Materialization ────────────────────────────────────────────
    function materializeNode(entry) {
      if (entry.materialized) return;
      entry.materialized = true;
      canvas.appendChild(entry.el);
      entry.el.getBoundingClientRect();
      entry.el.classList.add("is-materialized");
    }

    function materializeEdge(entry) {
      if (entry.materialized) return;
      entry.materialized = true;
      svg.appendChild(entry.path);
      const length = entry.path.getTotalLength();
      entry.length = length;
      entry.path.style.strokeDasharray = String(length);
      entry.path.style.strokeDashoffset = String(length);
    }

    // ── Animation primitives ──────────────────────────────────────
    function easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function edgeDuration(length) {
      const base = length / GRAPH.EDGE_SPEED;
      const clamped = Math.max(GRAPH.EDGE_MS_MIN, Math.min(GRAPH.EDGE_MS_MAX, base));
      return clamped * (0.88 + Math.random() * 0.24);
    }

    function nodeDuration() {
      const range = GRAPH.NODE_RUN_MS_MAX - GRAPH.NODE_RUN_MS_MIN;
      return GRAPH.NODE_RUN_MS_MIN + Math.random() * range;
    }

    function animatePacket(entry, duration) {
      const { path, length, canvas: c } = entry;

      if (reduceMotion) {
        path.style.strokeDashoffset = "0";
        path.dataset.state = "done";
        return Promise.resolve();
      }

      const packet = document.createElement("span");
      packet.className = "hero-chat__graph-packet";
      packet.style.willChange = "transform, opacity";
      c.appendChild(packet);

      const startPoint = path.getPointAtLength(0);
      packet.style.transform = `translate3d(${startPoint.x}px, ${startPoint.y}px, 0) translate(-50%, -50%)`;

      const startTime = performance.now();

      return new Promise((resolve) => {
        function tick(now) {
          const t = Math.min(1, (now - startTime) / duration);
          const eased = easeInOutCubic(t);
          const point = path.getPointAtLength(length * eased);
          packet.style.transform = `translate3d(${point.x}px, ${point.y}px, 0) translate(-50%, -50%)`;
          path.style.strokeDashoffset = (length * (1 - eased)).toFixed(2);
          path.dataset.state = "active";

          if (t < 1) {
            window.requestAnimationFrame(tick);
          } else {
            path.dataset.state = "done";
            packet.style.transition = "opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)";
            packet.style.opacity = "0";
            window.setTimeout(() => packet.remove(), 450);
            resolve();
          }
        }
        window.requestAnimationFrame(tick);
      });
    }

    // ── DAG traversal ──────────────────────────────────────────────
    async function activateEdge(edge) {
      const entry = edgeMap.get(edge);
      if (!entry) return;

      materializeEdge(entry);
      const dur = edgeDuration(entry.length);

      const targetEntry = nodeMap.get(edge.to);
      window.setTimeout(() => {
        if (!targetEntry.materialized) {
          materializeNode(targetEntry);
          followTo(edge.to);
        }
      }, dur * GRAPH.TARGET_REVEAL_AT);

      await animatePacket(entry, dur);

      const tracker = incomingTracker.get(edge.to);
      tracker.drawn += 1;
      if (tracker.drawn === tracker.needed) {
        await activateNode(edge.to);
      }
    }

    async function activateNode(nodeId) {
      const entry = nodeMap.get(nodeId);
      if (!entry) return;

      if (!entry.materialized) {
        materializeNode(entry);
        followTo(nodeId);
        await delay(GRAPH.MATERIALIZE_FADE_MS);
      } else {
        followTo(nodeId);
      }

      entry.el.dataset.state = "running";
      await delay(nodeDuration());
      entry.el.dataset.state = "done";

      const outgoing = graph.edges.filter((e) => e.from === nodeId);
      if (outgoing.length === 0) return;
      await Promise.all(outgoing.map((edge) => activateEdge(edge)));
    }

    // ── Bootstrap ──────────────────────────────────────────────────
    if (roots.length > 0) {
      const firstRoot = nodeMap.get(roots[0].id);
      applyCamera(firstRoot.x + NODE_W / 2, firstRoot.y + NODE_H / 2);
    }
    // Wait for the graph container to fully settle before the first node appears
    await delay(520);

    roots.forEach((r) => {
      const entry = nodeMap.get(r.id);
      materializeNode(entry);
      followTo(r.id);
    });
    await delay(GRAPH.MATERIALIZE_FADE_MS + 120);

    await Promise.all(roots.map((r) => activateNode(r.id)));

    // After everything done, allow user to drag the canvas
    if (panState) panState.enable();
  }

  async function streamNarration(body, text) {
    if (!text) return;
    const container = document.createElement("p");
    container.className = "hero-chat__narration";
    body.appendChild(container);

    const parts = text.split(/(\s+)/);
    for (const part of parts) {
      if (!part) continue;
      if (/^\s+$/.test(part)) {
        container.appendChild(document.createTextNode(part));
        continue;
      }
      const span = document.createElement("span");
      span.className = "hero-chat__narration-word";
      span.textContent = part;
      container.appendChild(span);
      span.getBoundingClientRect();
      span.classList.add("is-visible");
      const dur = reduceMotion ? 1 : 26 + Math.random() * 38;
      await delay(dur);
    }
  }

  async function runFlow(promptText, workflowKey) {
    if (busy) return;
    setBusy(true);

    appendUserMessage(promptText);
    activate();
    await delay(260);

    const data = workflowKey && WORKFLOWS[workflowKey] ? WORKFLOWS[workflowKey] : FALLBACK;
    const body = buildAssistantBody();
    buildWorkflowCard(body, data.card);
    await delay(220);
    const stepEls = buildReasoning(body, data.reasoning);
    scrollToBottom();

    await delay(180);
    await runReasoning(stepEls);
    await delay(260);

    const graphCtx = buildGraph(body, data.graph);
    scrollToBottom();
    await delay(220);

    await runGraph(data.graph, graphCtx);
    await delay(340);

    await streamNarration(body, data.narration);
    scrollToBottom();

    setBusy(false);
    if (input) {
      input.value = "";
      input.focus();
    }
  }

  pills.forEach((pill) => {
    pill.addEventListener("click", () => {
      const key = pill.dataset.workflow;
      const data = key ? WORKFLOWS[key] : null;
      const text = (data && data.prompt) ? data.prompt : pill.textContent.trim();
      runFlow(text, key);
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      resetChat();
    });
  }

  if (input) {
    input.addEventListener("input", () => {
      if (submit) submit.disabled = busy || !input.value.trim();
    });
  }

  (function chatPlaceholderRender() {
    const placeholder = root.querySelector("[data-chat-placeholder]");
    if (!placeholder || !input) return;

    const text = placeholder.textContent.trim() || "Describe a workflow to automate...";
    placeholder.setAttribute("aria-label", text);
    placeholder.textContent = "";
    Array.from(text).forEach((ch, i) => {
      const span = document.createElement("span");
      span.className = "hero-chat__placeholder-char";
      span.style.setProperty("--i", i);
      span.setAttribute("aria-hidden", "true");
      if (ch === " ") {
        span.innerHTML = "&nbsp;";
      } else {
        span.textContent = ch;
      }
      placeholder.appendChild(span);
    });

    const syncHidden = () => {
      placeholder.classList.toggle("is-hidden", input.value.length > 0);
    };
    input.addEventListener("input", syncHidden);
    syncHidden();
  })();

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const value = input.value.trim();
      if (!value || busy) return;
      runFlow(value, null);
    });
  }
})();
