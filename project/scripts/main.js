

// Object
const psychologist = {
  name: "Lic. Daniela Estefany Rondan Suazo",
  specialty: "Anxiety, Emotional Regulation & Relationship Therapy",
  location: "Online & In-person Sessions",
  email: "contact@mindcarepsychology.com"
};

// Array
const services = [
  "Anxiety Therapy",
  "Stress Management",
  "Couples Counseling",
  "Self-Esteem Coaching"
];

// Function 1: footer dates
function setFooterMeta() {
  const yearEl = document.querySelector("#year");
  const modEl = document.querySelector("#lastModified");

  if (yearEl) yearEl.textContent = new Date().getFullYear();
  if (modEl) modEl.textContent = document.lastModified;
}

// Function 2: render services (template literals)
function displayServices() {
  const container = document.querySelector("#servicesList");
  if (!container) return;

  container.innerHTML = services.map(service => `<li>${service}</li>`).join("");
}

// Function 3: form + localStorage + conditional branching
function handleForm(event) {
  event.preventDefault();

  const name = document.querySelector("#name")?.value.trim();
  const email = document.querySelector("#email")?.value.trim();
  const message = document.querySelector("#message")?.value.trim() || "";

  if (!name || !email) {
    alert("Please fill out all required fields.");
    return;
  }

  localStorage.setItem("clientName", name);
  localStorage.setItem("clientEmail", email);
  localStorage.setItem("clientMessage", message);

  const confirmation = document.querySelector("#confirmation");
  if (confirmation) {
    confirmation.textContent = `Thank you, ${name}. Your request has been received.`;
  }

  event.target.reset();
}

// Function 4: highlight current page in nav
function setActiveNavLink() {
  const links = document.querySelectorAll("nav a");
  const current = window.location.pathname.split("/").pop() || "index.html";

  links.forEach(a => {
    const href = a.getAttribute("href");
    if (!href) return;

    // Mark active only for real pages (not #anchors)
    if (href === current) {
      a.classList.add("active");
      a.setAttribute("aria-current", "page");
    }
  });
}

// Function 5: simple reveal on scroll
function enableReveal() {
  const sections = document.querySelectorAll("main section");
  sections.forEach(sec => sec.classList.add("reveal"));

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) {
    sections.forEach(sec => sec.classList.add("is-visible"));
    return;
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("is-visible");
    });
  }, { threshold: 0.12 });

  sections.forEach(sec => io.observe(sec));
}

/* Events */
document.addEventListener("DOMContentLoaded", () => {
  setFooterMeta();
  setActiveNavLink();
  displayServices();
  enableReveal();

  document.querySelector("#contactForm")
    ?.addEventListener("submit", handleForm);
});
