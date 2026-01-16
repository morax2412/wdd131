// ===== Mobile menu toggle =====
const menuButton = document.querySelector("#menu");
const nav = document.querySelector("nav");

if (menuButton && nav) {
  const setMenuState = (open) => {
    nav.classList.toggle("open", open);
    menuButton.classList.toggle("open", open);

    menuButton.setAttribute("aria-expanded", open ? "true" : "false");
    menuButton.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  };

  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.contains("open");
    setMenuState(!isOpen);
  });

  // Cerrar menú al hacer click en un link dentro del nav
  nav.addEventListener("click", (e) => {
    const link = e.target.closest("a");
    if (link) setMenuState(false);
  });

  // Estado inicial (por si el HTML no lo trae)
  if (!menuButton.hasAttribute("aria-expanded")) {
    menuButton.setAttribute("aria-expanded", "false");
  }
  if (!menuButton.hasAttribute("aria-label")) {
    menuButton.setAttribute("aria-label", "Open menu");
  }
}

// ===== Footer dynamic data =====
const yearEl = document.querySelector("#year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

const modifiedEl = document.querySelector("#modified");
if (modifiedEl) modifiedEl.textContent = document.lastModified;

