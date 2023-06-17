let lastModified = new Date(document.lastModified);
let fullDate = lastModified.toLocaleString('en-US', {month: "2-digit", day: "2-digit", year: "numeric"});
let time = lastModified.toLocaleString('en-GB', {hour: "2-digit", minute: "2-digit", second: "2-digit"});
let dateTime = `Last Updated: ${fullDate} ${time}`;
document.getElementById("lastModified").innerHTML = dateTime;
var currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

document.addEventListener('DOMContentLoaded', function() {
  
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const primaryNav = document.getElementById('primaryNav');
  
    
      
    
  
    hamburgerBtn.addEventListener('click',function () {
      primaryNav.classList.toggle('open');
    });
    });
  
  


 

//Current time
function updateBanner() {
  let date1 = document.getElementById("currentTime");
  const now = new Date();
  const dayOfWeek = now.getDay();
  const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
  const formattedDate = new Intl.DateTimeFormat("en-UK", options).format(now);
  date1.innerHTML = formattedDate;
  if (dayOfWeek === 1 || dayOfWeek === 2) {
    document.getElementById("meetAndGreet").style.display = "block";
  } else {
    document.getElementById("meetAndGreet").style.display = "none";
  }
}


document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll(".discover-imgs");
const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 200px 0px" // Adjust this value as per your requirements
  };

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


  async function getBusinessesData() {
    try {
      const response = await fetch("data.json");
      const data = await response.json();
      displayBusinesses(data.businesses);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  
  function displayBusinesses(businesses) {
    const cards = document.querySelector(".businessCards");
  
    businesses.forEach((business) => {
      let card = document.createElement("section");
      let logo = document.createElement("img");
      let location = document.createElement("p");
      let number = document.createElement("p");
      let siteLink = document.createElement("a");
      let company = document.createElement("p");
  
      location.textContent = `Address: ${business.address}`;
      number.textContent = `Number: ${business.number}`;
  
      company.textContent = business.companyName;
      company.classList.add("businessName");
  
      siteLink.textContent = business.siteURL;
      siteLink.href = business.siteURL;
  
      logo.src = business.siteLogo;
      logo.alt = `Logo of ${business.companyName}`;
      logo.loading = "lazy";
      logo.width = "456";
      logo.height = "250";
      logo.classList.add("businessLogo");
  
      card.appendChild(logo);
      card.appendChild(company);
      card.appendChild(location);
      card.appendChild(number);
      card.appendChild(siteLink);
  
      cards.appendChild(card);
    });
  }
  
  getBusinessesData();
  
  function toggleLayout() {
    const directoryMain = document.getElementById("directory-main");
    const layoutBtn = document.getElementById("layoutBtn");
  
    if (directoryMain.classList.contains("directory-list")) {
      directoryMain.classList.remove("directory-list");
      directoryMain.classList.add("directory-grid");
      layoutBtn.textContent = "📄 List";
    } else {
      directoryMain.classList.remove("directory-grid");
      directoryMain.classList.add("directory-list");
      layoutBtn.textContent = "⏹️ Grid";
    }
  }
  
  document.getElementById("gridBtn").addEventListener("click", toggleLayout);
  document.getElementById("listBtn").addEventListener("click", toggleLayout);
  