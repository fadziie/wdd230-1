let lastModified = new Date(document.lastModified);
let fullDate = lastModified.toLocaleString('en-US', {month: "2-digit", day: "2-digit", year: "numeric"});
let time = lastModified.toLocaleString('en-GB', {hour: "2-digit", minute: "2-digit", second: "2-digit"});
let dateTime = `Last Updated: ${fullDate} ${time}`;
document.getElementById("lastModified").innerHTML = dateTime;
var currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;
const toggleMenu = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
toggleMenu.addEventListener('click', function() {
  menu.classList.toggle('active');
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

  
const images = document.querySelectorAll("img[data-src]");

const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 50px 0px"
};


const loadImages = (image) => {
    if (image.getAttribute("src")){
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {image.removeAttribute("data-src");};
    }
    else
    {
        image.setAttribute("srcset", image.getAttribute("data-src"));
    }
};

if("IntersectionObserver" in window) {
    const imgObserver = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (!item.isIntersecting) {
                return;
            } else {
                loadImages(item.target);
                imgObserver.unobserve(item.target);
            }
        });
    }, imgOptions);

    images.forEach((img) => {
        imgObserver.observe(img);
    });
}
else {
}

