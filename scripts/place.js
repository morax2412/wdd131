// Footer info (safe)
const yearEl = document.querySelector("#currentyear");
const modifiedEl = document.querySelector("#lastmodified");

if (yearEl) yearEl.textContent = new Date().getFullYear();
if (modifiedEl) modifiedEl.textContent = document.lastModified;

// Weather elements (safe)
const tempEl = document.querySelector("#temp");
const windEl = document.querySelector("#wind");
const chillEl = document.querySelector("#windchill");

// If any of the required weather elements are missing, stop here safely.
if (!tempEl || !windEl || !chillEl) {
  // Nothing to do on this page
} else {
  // Static inputs (must match the HTML displayed values)
  const tempC = Number(tempEl.textContent);
  const windKmh = Number(windEl.textContent);

  // One-line return function (required) - Metric formula
  const calculateWindChill = (t, v) =>
    13.12 + (0.6215 * t) - (11.37 * (v ** 0.16)) + (0.3965 * t * (v ** 0.16));

  // Conditions for valid windchill (metric)
  let windChillResult = "N/A";

  if (!Number.isNaN(tempC) && !Number.isNaN(windKmh) && tempC <= 10 && windKmh > 4.8) {
    windChillResult = calculateWindChill(tempC, windKmh).toFixed(1);
  }

  // IMPORTANT: Only write the value, because the unit is already in the HTML.
  chillEl.textContent = windChillResult;
}
