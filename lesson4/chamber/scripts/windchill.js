// Retrieve the temperature and wind speed elements
const temperatureElement = document.querySelector("#temperature");
const windSpeedElement = document.querySelector("#wind-speed");

// Extract the temperature and wind speed values
const temperature = parseFloat(temperatureElement.textContent);
const windSpeed = parseFloat(windSpeedElement.textContent);
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
