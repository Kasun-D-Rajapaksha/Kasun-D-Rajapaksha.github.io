/* ============================================
   Kasun Rajapaksha — Portfolio interactions
   Vanilla JS, no dependencies
   ============================================ */

// Email used by the mailto-based contact form
const CONTACT_EMAIL = "rajapaksha.deeptha@gmail.com";

/* ===== Typing effect in hero ===== */
(function typingEffect() {
  const el = document.getElementById("typed-text");
  if (!el) return;

  const phrases = [
    "Manual Testing",
    "Test Automation",
    "Cypress",
    "Playwright",
    "API Testing",
    "Performance Testing",
  ];

  const TYPE_SPEED = 80;
  const DELETE_SPEED = 45;
  const HOLD_AFTER_TYPE = 1800;
  const HOLD_AFTER_DELETE = 400;

  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick() {
    const phrase = phrases[phraseIndex];

    if (!deleting) {
      charIndex++;
      el.textContent = phrase.slice(0, charIndex);
      if (charIndex === phrase.length) {
        deleting = true;
        setTimeout(tick, HOLD_AFTER_TYPE);
        return;
      }
      setTimeout(tick, TYPE_SPEED);
    } else {
      charIndex--;
      el.textContent = phrase.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(tick, HOLD_AFTER_DELETE);
        return;
      }
      setTimeout(tick, DELETE_SPEED);
    }
  }

  tick();
})();

/* ===== Scroll reveal (IntersectionObserver) ===== */
(function scrollReveal() {
  const revealEls = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    revealEls.forEach((el) => el.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  revealEls.forEach((el) => observer.observe(el));
})();

/* ===== Animated stat counters ===== */
(function statCounters() {
  const counters = document.querySelectorAll(".stat-number");
  if (!counters.length) return;

  function animate(el) {
    const target = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix || "";
    const duration = 1400;
    const start = performance.now();

    function step(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animate(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((el) => observer.observe(el));
})();

/* ===== Navbar: scrolled state + mobile menu ===== */
(function navbar() {
  const nav = document.getElementById("navbar");
  const toggle = document.getElementById("nav-toggle");
  const menu = document.getElementById("nav-menu");

  window.addEventListener(
    "scroll",
    () => nav.classList.toggle("scrolled", window.scrollY > 20),
    { passive: true }
  );

  toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    toggle.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
  });

  menu.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
      toggle.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
})();

/* ===== Active section highlighting ===== */
(function activeLinks() {
  const sections = document.querySelectorAll("section[id]");
  const links = document.querySelectorAll(".nav-link");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          links.forEach((link) => {
            link.classList.toggle(
              "active",
              link.getAttribute("href") === "#" + id
            );
          });
        }
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );

  sections.forEach((section) => observer.observe(section));
})();

/* ===== Contact form (mailto, no backend) ===== */
(function contactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    const subject = encodeURIComponent("Portfolio contact from " + name);
    const body = encodeURIComponent(
      message + "\n\n— " + name + " (" + email + ")"
    );

    window.location.href =
      "mailto:" + CONTACT_EMAIL + "?subject=" + subject + "&body=" + body;
  });
})();

/* ===== Footer year ===== */
document.getElementById("year").textContent = new Date().getFullYear();
