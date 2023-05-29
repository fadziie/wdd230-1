document.addEventListener("DOMContentLoaded", function() {
    // Intersection Observer options
    const options = {
      rootMargin: "0px",
      threshold: 0.1
    };
  
    // Intersection Observer callback
    const handleIntersection = function(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.classList.add("loaded");
          observer.unobserve(lazyImage);
        }
      });
    };
  
    // Create Intersection Observer instance
    const observer = new IntersectionObserver(handleIntersection, options);
  
    // Select all lazy images
    const lazyImages = document.querySelectorAll(".lazy");
  
    // Observe each lazy image
    lazyImages.forEach(image => {
      observer.observe(image);
    });
  });
  