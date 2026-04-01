const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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

requestAnimationFrame(() => {
  requestAnimationFrame(() => {
    heroEls.forEach((el) => el.classList.add("is-visible"));
  });
});

const revealEls = Array.from(document.querySelectorAll("[data-reveal]"));
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
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

if (!prefersReducedMotion) {
  const hero = document.getElementById("hero");
  const heroMessage = document.querySelector("[data-hero-message]");
  const heroMessageText = document.querySelector("[data-hero-message-text]");
  const magnets = Array.from(document.querySelectorAll(".magnetic"));
  const heroPrompt = "Stop telling your team how work is done..";
  let heroTypingTimer = null;
  let heroResetTimer = null;
  let heroHasTyped = false;

  if (hero && heroMessage && heroMessageText) {
    const setHeroMessageOffset = (event) => {
      const rect = hero.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width - 0.5;
      const py = (event.clientY - rect.top) / rect.height - 0.5;
      heroMessage.style.setProperty("--hero-message-x", `${(px * 16).toFixed(2)}px`);
      heroMessage.style.setProperty("--hero-message-y", `${(py * 12).toFixed(2)}px`);
    };

    const clearHeroTimers = () => {
      clearInterval(heroTypingTimer);
      clearTimeout(heroResetTimer);
    };

    const resetHeroMessage = () => {
      heroMessage.classList.remove("is-visible");
      heroMessageText.textContent = "";
      heroMessage.style.setProperty("--hero-message-x", "0px");
      heroMessage.style.setProperty("--hero-message-y", "0px");
      heroHasTyped = false;
    };

    const startHeroTyping = () => {
      if (heroHasTyped) {
        heroMessageText.textContent = heroPrompt;
        heroMessage.classList.add("is-visible");
        return;
      }

      clearInterval(heroTypingTimer);
      heroMessageText.textContent = "";

      let index = 0;
      heroTypingTimer = window.setInterval(() => {
        index += 1;
        heroMessageText.textContent = heroPrompt.slice(0, index);

        if (index >= heroPrompt.length) {
          clearInterval(heroTypingTimer);
          heroHasTyped = true;
        }
      }, 68);
    };

    hero.addEventListener("pointerenter", (event) => {
      clearHeroTimers();
      setHeroMessageOffset(event);
      heroMessage.classList.add("is-visible");
      startHeroTyping();
    });

    hero.addEventListener("pointermove", (event) => {
      setHeroMessageOffset(event);

      if (!heroMessage.classList.contains("is-visible")) {
        clearHeroTimers();
        heroMessage.classList.add("is-visible");
        startHeroTyping();
      }
    });

    hero.addEventListener("pointerleave", () => {
      clearHeroTimers();
      heroMessage.classList.remove("is-visible");
      heroResetTimer = window.setTimeout(() => {
        resetHeroMessage();
      }, 220);
    });
  }

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
}
