// Footer info
const yearEl = document.querySelector("#currentyear");
const modEl = document.querySelector("#lastmodified");
if (yearEl) yearEl.textContent = new Date().getFullYear();
if (modEl) modEl.textContent = document.lastModified;

// Read static values from HTML
const tempEl = document.querySelector("#temp");
const windEl = document.querySelector("#wind");
const chillEl = document.querySelector("#windchill");

const tempC = tempEl ? Number(tempEl.textContent) : NaN;
const windKmh = windEl ? Number(windEl.textContent) : NaN;

// One-line return (required)
const calculateWindChill = (t, v) =>
  13.12 + (0.6215 * t) - (11.37 * (v ** 0.16)) + (0.3965 * t * (v ** 0.16));

let result = "N/A";

// Apply only if conditions are met (metric)
if (!Number.isNaN(tempC) && !Number.isNaN(windKmh) && tempC <= 10 && windKmh > 4.8) {
  result = `${calculateWindChill(tempC, windKmh).toFixed(1)} °C`;
}

if (chillEl) chillEl.textContent = result;




