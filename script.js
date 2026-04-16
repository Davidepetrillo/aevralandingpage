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

const demoBookingLinks = Array.from(document.querySelectorAll('a[href*="calendly.com"]'));
demoBookingLinks.forEach((link) => {
  link.addEventListener("click", () => {
    trackEvent("demo booking clicked", { source: link.closest("section")?.id || "unknown" });
  });
});

const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

const progressBar = document.getElementById("scroll-progress");
if (progressBar) {
  window.addEventListener(
    "scroll",
    () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const pct = maxScroll > 0 ? (scrolled / maxScroll) * 100 : 0;
      progressBar.style.width = pct + "%";
    },
    { passive: true }
  );
}

const heroEls = Array.from(document.querySelectorAll("[data-hero-reveal]"));
heroEls.forEach((el, i) => {
  el.style.transitionDelay = `${i * 120}ms`;
});

const heroDemoBrowser = document.querySelector(".hero-fake-demo-browser");
const syncHeroDemoScale = () => {
  if (!heroDemoBrowser) {
    return;
  }

  const styles = getComputedStyle(heroDemoBrowser);
  const baseWidth = Number.parseFloat(styles.getPropertyValue("--hero-demo-base-width"));
  const baseHeight = Number.parseFloat(styles.getPropertyValue("--hero-demo-base-height"));

  if (!baseWidth || !baseHeight) {
    return;
  }

  const availableWidth = heroDemoBrowser.clientWidth;
  const availableHeight = Math.min(window.innerHeight * 0.72, 760);
  const scale = Math.min(1, availableWidth / baseWidth, availableHeight / baseHeight);
  heroDemoBrowser.style.setProperty("--hero-demo-scale", String(scale));
};

if (heroDemoBrowser) {
  syncHeroDemoScale();

  if ("ResizeObserver" in window) {
    const heroDemoObserver = new ResizeObserver(() => {
      syncHeroDemoScale();
    });

    heroDemoObserver.observe(heroDemoBrowser);
  } else {
    window.addEventListener("resize", syncHeroDemoScale, { passive: true });
  }
}

requestAnimationFrame(() => {
  requestAnimationFrame(() => {
    heroEls.forEach((el) => el.classList.add("is-visible"));
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
const pricingSwitch = document.querySelector("[data-pricing-switch]");
const pricingLabels = Array.from(document.querySelectorAll("[data-pricing-label]"));
const pricingValues = Array.from(document.querySelectorAll("[data-price-monthly]"));
const faqQuestions = Array.from(document.querySelectorAll(".faq-question"));
const contactForm = document.querySelector("[data-contact-form]");

if (useCaseTabs.length && useCasePanels.length && useCaseCopies.length) {
  const activateUseCase = (id) => {
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

  useCaseTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      activateUseCase(tab.dataset.useCaseTab);
      trackEvent("use case tab clicked", { use_case: tab.dataset.useCaseTab });
    });
  });
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
