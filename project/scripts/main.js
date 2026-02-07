/* ===============================
   main.js
   (Safe utilities for siteplan)
   =============================== */

document.addEventListener("DOMContentLoaded", () => {
  setFooterYear();
  enableSmoothScroll();
  enableWireframeToggle(); // optional enhancement
});

/* 1) Footer year (optional) */
function setFooterYear() {
  const yearEl = document.querySelector("#year");
  if (!yearEl) return;
  yearEl.textContent = new Date().getFullYear();
}

/* 2) Smooth scroll for internal anchors */
function enableSmoothScroll() {
  const internalLinks = document.querySelectorAll('a[href^="#"]');

  internalLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");
      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      history.pushState(null, "", targetId);
    });
  });
}

/* 3) Collapse/expand wireframes (optional)
   - Click the wireframe title area to toggle the blocks.
*/
function enableWireframeToggle() {
  const wireframes = document.querySelectorAll(".wf");

  wireframes.forEach((wf) => {
    const title = wf.querySelector(".wf-title");
    const boxes = wf.querySelectorAll(".box");

    if (!title || boxes.length === 0) return;

    // Accessibility-ish
    title.style.cursor = "pointer";
    title.setAttribute("role", "button");
    title.setAttribute("tabindex", "0");
    title.setAttribute("aria-expanded", "true");

    const toggle = () => {
      const expanded = title.getAttribute("aria-expanded") === "true";
      title.setAttribute("aria-expanded", String(!expanded));
      boxes.forEach((box) => {
        box.hidden = expanded; // collapse if was expanded
      });
    };

    title.addEventListener("click", toggle);
    title.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggle();
      }
    });
  });
}
