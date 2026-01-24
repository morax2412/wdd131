// Footer info
const yearSpan = document.querySelector("#currentyear");
const modSpan = document.querySelector("#lastmodified");

if (yearSpan) yearSpan.textContent = new Date().getFullYear();
if (modSpan) modSpan.textContent = document.lastModified;

// Static weather inputs (must match HTML)
const tempEl = document.querySelector("#temp");
const windEl = document.querySelector("#wind");
const chillEl = document.querySelector("#windchill");

const tempC = tempEl ? Number(tempEl.textContent) : NaN;
const windKmh = windEl ? Number(windEl.textContent) : NaN;

// One-line return function (required)
const calculateWindChill = (t, v) =>
  13.12 + 0.6215 * t - 11.37 * (v ** 0.16) + 0.3965 * t * (v ** 0.16);

// Conditions for valid windchill (metric)
let result = "N/A";
if (!Number.isNaN(tempC) && !Number.isNaN(windKmh) && tempC <= 10 && windKmh > 4.8) {
  result = `${calculateWindChill(tempC, windKmh).toFixed(1)} °C`;
}

if (chillEl) chillEl.textContent = result;

