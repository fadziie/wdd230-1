// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// API URL with query parameters
const url = 'https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=e9ad653b9e064757388ed45595c70f41';

// Fetch weather data from the API
async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function capitalizeWords(str) {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

// Display weather data on the page
function displayResults(weatherData) {
  currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong> &deg;F`;

  weatherData.weather.forEach((weatherEvent, index) => {
    const iconSrc = `https://openweathermap.org/img/w/${weatherEvent.icon}.png`;
    const desc = capitalizeWords(weatherEvent.description);

    // Create elements for each weather event
    const weatherIconElement = document.createElement('img');
    const captionElement = document.createElement('figcaption');
    weatherIconElement.setAttribute('src', iconSrc);
    weatherIconElement.setAttribute('alt', desc);
    captionElement.textContent = desc;

    // Append elements to the figure
    if (index === 0) {
      // Use the existing weatherIcon and captionDesc elements for the first event
      weatherIcon.setAttribute('src', iconSrc);
      weatherIcon.setAttribute('alt', desc);
      captionDesc.textContent = desc;
    } else {
      // Create new figure and append to the document for subsequent events
      const figureElement = document.createElement('figure');
      figureElement.appendChild(weatherIconElement);
      figureElement.appendChild(captionElement);
      document.body.appendChild(figureElement);
    }
  });
}

apiFetch();

// Get current year
var currentYear = new Date().getFullYear();
  
// Set current year in HTML
document.getElementById("currentYear").textContent = currentYear;