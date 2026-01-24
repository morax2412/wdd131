// Footer info
document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastmodified").textContent = document.lastModified;

// Static weather inputs (must match what you display in HTML)
const tempC = Number(document.querySelector("#temp").textContent);   // °C
const windKmh = Number(document.querySelector("#wind").textContent); // km/h

// One-line return function (required)
const calculateWindChill = (t, v) => 13.12 + (0.6215 * t) - (11.37 * (v ** 0.16)) + (0.3965 * t * (v ** 0.16));

// Conditions for valid windchill (metric)
let windChillResult = "N/A";
if (tempC <= 10 && windKmh > 4.8) {
  windChillResult = `${calculateWindChill(tempC, windKmh).toFixed(1)} °C`;
}

document.querySelector("#windchill").textContent = windChillResult;
