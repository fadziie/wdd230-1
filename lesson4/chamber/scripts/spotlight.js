async function getBusinessesData() {
    try {
      const response = await fetch("data/data.json");
      const data = await response.json();
      displayBusinesses(data.businesses);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }



function displayBusinesses(businesses) {
    const spotlightSections = document.querySelectorAll(".spotlight section");
  
    // Filter businesses with silver or gold membership level
    const filteredBusinesses = businesses.filter(
      (business) =>
        business.membershipLevel === "Silver Membership" ||
        business.membershipLevel === "Gold Membership"
    );
  
    // Randomly select two to three businesses
    const selectedBusinesses = getRandomBusinesses(filteredBusinesses, 2, 3);
  
    selectedBusinesses.forEach((business, index) => {
      const spotlightSection = spotlightSections[index];
      const heading = spotlightSection.querySelector("h3");
      const description = spotlightSection.querySelector("p");
  
      heading.textContent = business.companyName;
      description.textContent = business.description;

      // Optional: Create a link for each business
  const link = document.createElement("a");
  link.href = business.siteURL;
  link.textContent = "Visit Website";
  spotlightSection.appendChild(link);
    });
  }
  getBusinessesData();
  function getRandomBusinesses(businesses, minCount, maxCount) {
    const selectedBusinesses = [];
    const count = Math.floor(Math.random() * (maxCount - minCount + 1)) + minCount;
  
    while (selectedBusinesses.length < count) {
      const randomIndex = Math.floor(Math.random() * businesses.length);
      const randomBusiness = businesses[randomIndex];
      if (!selectedBusinesses.includes(randomBusiness)) {
        selectedBusinesses.push(randomBusiness);
      }
    }
  
    return selectedBusinesses;
  }
  








