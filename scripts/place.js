// ===== Footer info =====
document.querySelector("#currentyear").textContent =
  new Date().getFullYear();

document.querySelector("#lastmodified").textContent =
  document.lastModified;


// ===== Static weather values from HTML =====
const temperature = Number(document.querySelector("#temp").textContent);   // °C
const windSpeed = Number(document.querySelector("#wind").textContent);     // km/h


// ===== Wind Chill Calculation (metric) =====
// Formula required by BYU assignment
const calculateWindChill = (t, v) =>
  13.12 +
  (0.6215 * t) -
  (11.37 * Math.pow(v, 0.16)) +
  (0.3965 * t * Math.pow(v, 0.16));


// ===== Apply conditions =====
let windChill = "N/A";

if (temperature <= 10 && windSpeed > 4.8) {
  windChill = `${calculateWindChill(temperature, windSpeed).toFixed(1)} °C`;
}


// ===== Output to page =====
document.querySelector("#windchill").textContent = windChill;
