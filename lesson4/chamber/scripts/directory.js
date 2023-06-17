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
  