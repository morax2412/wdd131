// ------------------------------
// Temple Data (Provided + 3 added)
// ------------------------------
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },

  // ------------------------------
  // Added temples (fixed working image URLs)
  // ------------------------------
  {
    templeName: "Laie Hawaii",
    location: "Laie, Hawaii, United States",
    dedicated: "1919, November, 27",
    area: 42100,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/laie-hawaii/800x1280/hawaii-temple-761091-wallpaper.jpg",
  },
  {
    templeName: "Sapporo Japan",
    location: "Sapporo, Japan",
    dedicated: "2016, August, 21",
    area: 48480,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sapporo-japan/800x500/sapporo-japan-exterior-night-1945721.jpg",
  },
  {
    templeName: "Kyiv Ukraine",
    location: "Kyiv, Ukraine",
    dedicated: "2010, August, 29",
    area: 22184,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/kyiv-ukraine/800x500/kyiv-ukraine-lds-temple-1129616-wallpaper.jpg",
  },
];

// ------------------------------
// Helpers
// ------------------------------
function getDedicatedYear(dedicatedString) {
  // "1888, May, 21" -> 1888
  const year = Number(dedicatedString.split(",")[0]);
  return Number.isNaN(year) ? 0 : year;
}

function formatArea(areaNumber) {
  return `${areaNumber.toLocaleString()} sq ft`;
}

// ------------------------------
// Create ONE card
// ------------------------------
function createTempleCard(temple) {
  return `
    <section class="card">
      <h2>${temple.templeName}</h2>
      <p><span class="label">Location:</span> ${temple.location}</p>
      <p><span class="label">Dedicated:</span> ${temple.dedicated}</p>
      <p><span class="label">Size:</span> ${formatArea(temple.area)}</p>

      <img
        src="${temple.imageUrl}"
        alt="${temple.templeName}"
        loading="lazy"
        width="400"
        height="250"
      >
    </section>
  `;
}

// ------------------------------
// Render cards to the DOM
// ------------------------------
function displayTemples(templeList) {
  const container = document.querySelector("#temple-cards");
  if (!container) return;

  container.innerHTML = templeList.map(createTempleCard).join("");

  // Fallback por si alguna imagen falla (sin usar onerror inline)
  container.querySelectorAll("img").forEach((img) => {
    img.addEventListener(
      "error",
      () => {
        img.src = "https://placehold.co/400x250?text=Image+Unavailable";
      },
      { once: true }
    );
  });
}

// ------------------------------
// Filtering logic
// ------------------------------
function filterTemples(filterName) {
  switch (filterName) {
    case "old":
      return temples.filter((t) => getDedicatedYear(t.dedicated) < 1900);
    case "new":
      return temples.filter((t) => getDedicatedYear(t.dedicated) > 2000);
    case "large":
      return temples.filter((t) => t.area > 90000);
    case "small":
      return temples.filter((t) => t.area < 10000);
    default:
      return temples; // home
  }
}

// ------------------------------
// Nav active state
// ------------------------------
function setActiveLink(filterName) {
  const links = document.querySelectorAll("nav a[data-filter]");
  links.forEach((link) => {
    link.classList.toggle("active", link.dataset.filter === filterName);
  });
}

// ------------------------------
// Footer dates
// ------------------------------
function setFooterDates() {
  const yearEl = document.querySelector("#year");
  const modEl = document.querySelector("#lastModified");

  if (yearEl) yearEl.textContent = new Date().getFullYear();
  if (modEl) modEl.textContent = document.lastModified;
}

// ------------------------------
// Init
// ------------------------------
function init() {
  setFooterDates();

  // Initial render
  displayTemples(temples);
  setActiveLink("home");

  // Event delegation for nav clicks
  const nav = document.querySelector("nav");
  if (!nav) return;

  nav.addEventListener("click", (event) => {
    const link = event.target.closest("a[data-filter]");
    if (!link) return;

    event.preventDefault();

    const filterName = link.dataset.filter;
    displayTemples(filterTemples(filterName));
    setActiveLink(filterName);
  });
}

init();

