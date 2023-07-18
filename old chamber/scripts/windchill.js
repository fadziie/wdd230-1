// Retrieve the temperature, wind speed, and wind chill elements
const temperatureElement = document.querySelector("#temperature");
const windSpeedElement = document.querySelector("#wind-speed");
const windChillElement = document.querySelector("#wind-chill");
const weatherIconElement = document.querySelector("#weather-icon");
const captionElement = document.querySelector("figcaption");

// Function to fetch weather data from OpenWeatherMap API
async function fetchWeatherData() {
  const apiKey = "e9ad653b9e064757388ed45595c70f41";
  const city = "Durban";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      const temperature = data.main.temp.toFixed(0);
      const windSpeed = data.wind.speed.toFixed(1);
      const windChill = calculateWindChill(temperature, windSpeed);
      const weatherEvent = data.weather[0];
      const iconSrc = `https://openweathermap.org/img/w/${weatherEvent.icon}.png`;
      const desc = capitalizeWords(weatherEvent.description);

      // Update the weather section with fetched data
      temperatureElement.textContent = temperature;
      windSpeedElement.textContent = windSpeed;
      windChillElement.textContent = windChill;
      weatherIconElement.setAttribute("src", iconSrc);
      weatherIconElement.setAttribute("alt", desc);
      captionElement.textContent = desc;
    } else {
      throw new Error(response.statusText);
    }
  } catch (error) {
    console.log(error);
  }
}

// Calculate the wind chill factor
function calculateWindChill(temperature, windSpeed) {
  const windChill =
    35.74 +
    0.6215 * temperature -
    35.75 * Math.pow(windSpeed, 0.16) +
    0.4275 * temperature * Math.pow(windSpeed, 0.16);
  return windChill.toFixed(2);
}

// Capitalize each word of the weather description
function capitalizeWords(str) {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

// Call the fetchWeatherData function to display the weather information
fetchWeatherData();
