

// Set current date in the header
const currentDateElement = document.createElement('span');
currentDateElement.classList.add('current-date'); // Add the class for styling
currentDateElement.textContent = new Date().toLocaleDateString('en-US', {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  year: 'numeric'
});
document.querySelector('header .header-container').appendChild(currentDateElement);

// Toggle menu on hamburger button click
document.addEventListener('DOMContentLoaded', function() {
  
const hamburgerButton = document.getElementById('.hamburgerButton');
  const primaryNav = document.getElementById('primaryNav');
    hamburgerButton.addEventListener('click',function () {
    primaryNav.classList.toggle('open');
  });
  });

// Highlight current menu item on hover
const menuItems = document.querySelectorAll('.menu li a');

menuItems.forEach(item => {
  item.addEventListener('mouseover', () => {
    menuItems.forEach(item => item.classList.remove('highlight'));
    item.classList.add('highlight');
  });

  item


// Set dynamic year in the footer
const dynamicYearElements = document.getElementsByClassName('dynamic-year');
const currentYear = new Date().getFullYear();
Array.from(dynamicYearElements).forEach(element => {
  element.textContent = currentYear;
});

// Set last modified date in the footer
const lastModifiedElement = document.getElementsByClassName('last-modified')[0];
lastModifiedElement.textContent = document.lastModified;

// Display banner on Mondays or Tuesdays
const bannerElement = document.createElement('div');
bannerElement.classList.add('banner');
const currentDay = new Date().getDay();
if (currentDay === 1 || currentDay === 2) {
  bannerElement.textContent = '🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.';
} else {
  bannerElement.style.display = 'none';
}
document.body.prepend(bannerElement);

// Calculate and display the time between user visits
const daysBetweenVisits = document.getElementById('daysBetweenVisits');
const lastVisit = localStorage.getItem('lastVisit');
const currentDate = new Date();
const currentTimestamp = currentDate.getTime();
const oneDayMilliseconds = 24 * 60 * 60 * 1000; // 1 day in milliseconds

if (lastVisit) {
  const lastVisitTimestamp = parseInt(lastVisit);
  const days = Math.round((currentTimestamp - lastVisitTimestamp) / oneDayMilliseconds);
  daysBetweenVisits.textContent = `Days since last visit: ${days}`;
} else {
  daysBetweenVisits.textContent = "Welcome! It's your first visit.";
}

// Store the current visit timestamp in local storage
localStorage.setItem('lastVisit', currentTimestamp.toString());


// Lazy Load Images
const images = document.querySelectorAll('img[data-src]');

function lazyLoad() {
  images.forEach((img) => {
    if (img.getBoundingClientRect().top <= window.innerHeight && img.getBoundingClientRect().bottom >= 0 && getComputedStyle(img).display !== 'none') {
      img.src = img.dataset.src;
      img.removeAttribute('data-src');
    }
  });

  // Remove event listener once all images are loaded
  if (images.length === 0) {
    window.removeEventListener('scroll', lazyLoad);
    window.removeEventListener('resize', lazyLoad);
    window.removeEventListener('orientationchange', lazyLoad);
  }
}

window.addEventListener('scroll', lazyLoad);
window.addEventListener('resize', lazyLoad);
window.addEventListener('orientationchange', lazyLoad);
});

const imgObserver = new IntersectionObserver((entries, imgObserver)=>{
    entries.forEach(entry =>{
        if (!entry.isIntersecting){
            preloadImage(entry.target);
            
            imgObserver.unobserve(entry.target);
        }
    })
    
}, imgOptions);

function preloadImage(img) {
    const src = img.getAttribute("data-src");
    if (!src) {
      return;
    }
    img.src = src;
    img.removeAttribute("data-src");
  }

images.forEach(image => {
    imgObserver.observe(image);
});
});