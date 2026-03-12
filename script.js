const yearEl = document.getElementById("year");
const topbar = document.querySelector(".topbar");
const tiltCards = Array.from(document.querySelectorAll(".tilt-card"));
const magneticButtons = Array.from(document.querySelectorAll(".btn"));
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxClose = document.getElementById("lightbox-close");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

if (lightbox instanceof HTMLElement && lightboxImage instanceof HTMLImageElement && lightboxClose instanceof HTMLElement) {
  const closeLightbox = () => {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    lightboxImage.removeAttribute("src");
    lightboxImage.alt = "";
  };

  const openLightbox = (src, alt) => {
    lightboxImage.src = src;
    lightboxImage.alt = alt || "Preview image";
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
  };

  document.querySelectorAll("[data-lightbox-image]").forEach((img) => {
    if (!(img instanceof HTMLImageElement)) return;
    img.style.cursor = "zoom-in";
    img.addEventListener("click", () => openLightbox(img.currentSrc || img.src, img.alt));
  });

  lightboxClose.addEventListener("click", closeLightbox);

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && lightbox.classList.contains("is-open")) {
      closeLightbox();
    }
  });
}

const revealTargets = Array.from(document.querySelectorAll(".hero, .section, .footer"));
revealTargets.forEach((el, index) => {
  el.setAttribute("data-reveal", "");
  el.style.transitionDelay = `${index * 70}ms`;
});

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealTargets.forEach((el) => io.observe(el));

if (topbar) {
  topbar.classList.remove("is-scrolled");
}

if (!prefersReducedMotion) {
  tiltCards.forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const bounds = card.getBoundingClientRect();
      const mx = event.clientX - bounds.left;
      const my = event.clientY - bounds.top;
      const px = mx / bounds.width - 0.5;
      const py = my / bounds.height - 0.5;
      card.style.setProperty("--mx", `${mx}px`);
      card.style.setProperty("--my", `${my}px`);
      card.style.transform = `translateY(-4px) rotateX(${(-py * 2.2).toFixed(2)}deg) rotateY(${(px * 3.1).toFixed(2)}deg)`;
      card.classList.add("is-hover");
    });

    card.addEventListener("pointerleave", () => {
      card.classList.remove("is-hover");
      card.style.transform = "";
    });
  });

  magneticButtons.forEach((button) => {
    button.addEventListener("pointermove", (event) => {
      const rect = button.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      button.style.transform = `translate(${(x * 0.09).toFixed(2)}px, ${(y * 0.13).toFixed(2)}px)`;
    });

    button.addEventListener("pointerleave", () => {
      button.style.transform = "";
    });
  });
}
