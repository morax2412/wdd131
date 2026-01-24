// Footer: year + last modified
document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastmodified").textContent = document.lastModified;

// Static weather values read from HTML (must match displayed values)
const tempC = Number(document.querySelector("#temp").textContent);
const windKmh = Number(document.querySelector("#wind").textContent);

// One-line windchill function (metric)
const calculateWindChill = (t, v) =>
  13.12 + 0.6215 * t - 11.37 * (v ** 0.16) + 0.3965 * t * (v ** 0.16);

// Only calculate when valid (metric rule)
const windchillEl = document.querySelector("#windchill");

if (tempC <= 10 && windKmh > 4.8) {
  windchillEl.textContent = `${calculateWindChill(tempC, windKmh).toFixed(1)} °C`;
} else {
  windchillEl.textContent = "N/A";
}


