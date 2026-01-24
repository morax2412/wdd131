// Footer info
document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastmodified").textContent = document.lastModified;

// Static weather inputs (must match HTML)
const tempC = Number(document.querySelector("#temp").textContent);
const windKmh = Number(document.querySelector("#wind").textContent);

// Required: one-line return
const calculateWindChill = (t, v) =>
  13.12 + 0.6215 * t - 11.37 * (v ** 0.16) + 0.3965 * t * (v ** 0.16);

// Metric rules
const windchillEl = document.querySelector("#windchill");

if (tempC <= 10 && windKmh > 4.8) {
  windchillEl.textContent = `${calculateWindChill(tempC, windKmh).toFixed(1)} °C`;
} else {
  windchillEl.textContent = "N/A";
}



