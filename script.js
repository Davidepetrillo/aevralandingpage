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
const heroEmailForm = document.querySelector("[data-hero-email-form]");

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

if (heroEmailForm) {
  heroEmailForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const heroEmailInput = heroEmailForm.querySelector("input[type='email']");
    const heroEmailButton = heroEmailForm.querySelector("button[type='submit']");
    const heroEmailStatus = heroEmailForm.querySelector("[data-hero-email-status]");
    const submittedEmail = heroEmailInput?.value?.trim().toLowerCase();

    if (!submittedEmail || !heroEmailInput.checkValidity()) {
      heroEmailInput?.reportValidity();
      return;
    }

    const submitWaitlist = async () => {
      if (heroEmailButton) {
        heroEmailButton.disabled = true;
        heroEmailButton.textContent = "Joining...";
      }

      if (heroEmailStatus) {
        heroEmailStatus.hidden = true;
        heroEmailStatus.classList.remove("is-error");
      }

      try {
        const response = await fetch(heroEmailForm.action, {
          method: "POST",
          body: new FormData(heroEmailForm),
          headers: {
            Accept: "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Request failed");
        }

        heroEmailForm.reset();

        if (heroEmailStatus) {
          heroEmailStatus.textContent = "You are on the waitlist.";
          heroEmailStatus.hidden = false;
        }

        trackEvent("hero waitlist submitted", {
          email_domain: submittedEmail.split("@")[1] || null,
        });
      } catch (error) {
        if (heroEmailStatus) {
          heroEmailStatus.textContent = "We could not submit your email. Please try again.";
          heroEmailStatus.classList.add("is-error");
          heroEmailStatus.hidden = false;
        }

        trackEvent("hero waitlist submission failed", {
          reason: error instanceof Error ? error.message : "unknown",
        });
      } finally {
        if (heroEmailButton) {
          heroEmailButton.disabled = false;
          heroEmailButton.textContent = "Join waitlist";
        }
      }
    };

    submitWaitlist();
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
