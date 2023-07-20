// Fetch weather data from OpenWeatherMap API and update the weather card
fetch('https://api.openweathermap.org/data/2.5/weather?q=Carlsbad,us&appid=e9ad653b9e064757388ed45595c70f41')
  .then(response => response.json())
  .then(data => {
    document.getElementById('temperature').textContent = data.main.temp;
    document.getElementById('condition').textContent = data.weather[0].description;
    document.getElementById('humidity').textContent = data.main.humidity;
  });

// Fetch three-day forecast data from OpenWeatherMap API and update the weather card
fetch('https://api.openweathermap.org/data/2.5/forecast/daily?q=Carlsbad,us&cnt=3&appid=e9ad653b9e064757388ed45595c70f41')
  .then(response => response.json())
  .then(data => {
    const forecast = data.list.map(day => `${day.temp.day}°C`).join(', ');
    document.getElementById('forecast').textContent = forecast;
  });

// Get the specialty drinks info from local storage and update the info card
const specialtyDrinksInfo = localStorage.getItem('specialtyDrinks');
if (specialtyDrinksInfo) {
  document.getElementById('specialty-drinks-info').textContent = specialtyDrinksInfo;
}

// Update the last modified date in the footer
document.getElementById('last-modified').textContent = document.lastModified;

// Populate the fruit select elements with options from the JSON data source
fetch('Fruit Data.json')
  .then(response => response.json())
  .then(data => {
    const fruits = data.fruits;
    const fruitOptions = fruits.map(fruit => `<option value="${fruit.name}">${fruit.name}</option>`).join('');
    document.getElementById('fruit1').innerHTML = fruitOptions;
    document.getElementById('fruit2').innerHTML = fruitOptions;
    document.getElementById('fruit3').innerHTML = fruitOptions;
  });

// Form submission event handler
document.getElementById('drink-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get form input values
  const firstName = document.getElementById('first-name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const fruit1 = document.getElementById('fruit1').value;
  const fruit2 = document.getElementById('fruit2').value;
  const fruit3 = document.getElementById('fruit3').value;
  const specialInstructions = document.getElementById('special-instructions').value;

  // Display the order output
  const orderInfo = `Name: ${firstName}<br>Email: ${email}<br>Phone: ${phone}<br>Fruit 1: ${fruit1}<br>Fruit 2: ${fruit2}<br>Fruit 3: ${fruit3}<br>Special Instructions: ${specialInstructions}`;
  const orderDate = new Date().toLocaleDateString();
  document.getElementById('order-info').innerHTML = orderInfo;
  document.getElementById('order-date').textContent = `Order Date: ${orderDate}`;
  document.getElementById('order-output').style.display = 'block';

  // Get nutritional information for the selected fruits from the JSON data source
  fetch('Fruit Data.json')
    .then(response => response.json())
    .then(data => {
      const fruits = data.fruits;
      const fruit1Info = fruits.find(fruit => fruit.name === fruit1);
      const fruit2Info = fruits.find(fruit => fruit.name === fruit2);
      const fruit3Info = fruits.find(fruit => fruit.name === fruit3);
      document.getElementById('fruit1-info').innerHTML = `<td>${fruit1Info.carbohydrates}</td><td>${fruit1Info.protein}</td><td>${fruit1Info.fat}</td><td>${fruit1Info.sugar}</td><td>${fruit1Info.calories}</td>`;
      document.getElementById('fruit2-info').innerHTML = `<td>${fruit2Info.carbohydrates}</td><td>${fruit2Info.protein}</td><td>${fruit2Info.fat}</td><td>${fruit2Info.sugar}</td><td>${fruit2Info.calories}</td>`;
      document.getElementById('fruit3-info').innerHTML = `<td>${fruit3Info.carbohydrates}</td><td>${fruit3Info.protein}</td><td>${fruit3Info.fat}</td><td>${fruit3Info.sugar}</td><td>${fruit3Info.calories}</td>`;
    });
});

// JavaScript code for handling form submission and other functionality

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();
    
    // Form submission logic
  
    // Update the order output section with the formatted output
  }
  
  // Add event listener to the form submit button
  document.getElementById('drink-form').addEventListener('submit', handleFormSubmit);

  var currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;
  