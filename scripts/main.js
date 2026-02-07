// Product array (use this as the data source)
const products = [
  { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "power laces", averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

const REVIEW_KEY = "wdd131-reviewCount";

function setFooterInfo() {
  const yearEl = document.querySelector("#year");
  const lastModEl = document.querySelector("#lastModified");

  if (yearEl) yearEl.textContent = new Date().getFullYear();
  if (lastModEl) lastModEl.textContent = document.lastModified;
}

function toTitleCase(str) {
  return String(str)
    .split(" ")
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function populateProductsSelect() {
  const select = document.querySelector("#productName");
  if (!select) return;

  // Prevent duplicates if script runs more than once
  const existingValues = new Set(
    [...select.options].map(opt => opt.value)
  );

  const frag = document.createDocumentFragment();

  products.forEach((p) => {
    if (existingValues.has(p.id)) return;

    const opt = document.createElement("option");
    opt.value = p.id;                   // requirement: id used for value field
    opt.textContent = toTitleCase(p.name); // requirement: name used for display
    frag.appendChild(opt);
  });

  select.appendChild(frag);
}

function updateReviewCounterOnReviewPage() {
  const counterEl = document.querySelector("#reviewCount");
  if (!counterEl) return; // only runs on review.html

  // Only count when page was reached via form submission (query string exists)
  if (!window.location.search || window.location.search.length < 2) {
    const current = Number(localStorage.getItem(REVIEW_KEY)) || 0;
    counterEl.textContent = String(current);
    return;
  }

  const current = Number(localStorage.getItem(REVIEW_KEY)) || 0;
  const next = current + 1;

  localStorage.setItem(REVIEW_KEY, String(next));
  counterEl.textContent = String(next);
}

document.addEventListener("DOMContentLoaded", () => {
  setFooterInfo();
  populateProductsSelect();
  updateReviewCounterOnReviewPage();
});
