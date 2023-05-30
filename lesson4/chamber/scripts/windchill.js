// Retrieve the temperature and wind speed elements
const temperatureElement = document.querySelector("#temperature");
const windSpeedElement = document.querySelector("#wind-speed");

// Extract the temperature and wind speed values
const temperature = parseFloat(temperatureElement.textContent);
const windSpeed = parseFloat(windSpeedElement.textContent);

// Calculate the wind chill factor
function calculateWindChill(temperature, windSpeed) {
  const windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
  return windChill.toFixed(2);
}
// Check if values meet the specification limits
const meetsRequirements = temperature <= 50 && windSpeed > 3.0;
// Calculate the wind chill factor or display "N/A"
let windChill;
if (meetsRequirements) {
  windChill = calculateWindChill(temperature, windSpeed);
} else {
  windChill = "N/A";
}

// Display the wind chill value in the weather section
const windChillElement = document.querySelector("#wind-chill");
windChillElement.textContent = windChill;
