// Footer: year + last modified
const yearEl = document.querySelector("#currentyear");
const modEl = document.querySelector("#lastmodified");

yearEl.textContent = new Date().getFullYear();
modEl.textContent = document.lastModified;

// Static weather values (must match what is displayed)
const tempEl = document.querySelector("#temp");
const windEl = document.querySelector("#wind");
const chillEl = document.querySelector("#windchill");

const tempC = Number(tempEl.textContent);
const windKmh = Number(windEl.textContent);

// One-line function (required)
const calculateWindChill = (t, v) =>
  13.12 + 0.6215 * t - 11.37 * (v ** 0.16) + 0.3965 * t * (v ** 0.16);

// Viable wind chill (metric)
const isViable = tempC <= 10 && windKmh > 4.8;

chillEl.textContent = isViable
  ? `${calculateWindChill(tempC, windKmh).toFixed(1)} °C`
  : "N/A";
