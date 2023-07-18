// Function to fetch data from the JSON file
function fetchData() {
    fetch('businesses.json')
      .then(response => response.json())
      .then(data => displayData(data));
  }

  // Function to display data in the specified view (grid or list)
  function displayData(data) {
    const container = document.getElementById('businesses');
    container.innerHTML = '';

    if (currentView === 'grid') {
      container.classList.remove('list-container');
      container.classList.add('grid-container');
      data.forEach(business => {
        const card = createCard(business);
        container.appendChild(card);
      });
    } else if (currentView === 'list') {
      container.classList.remove('grid-container');
      container.classList.add('list-container');

      const list = document.createElement('ul');
      container.appendChild(list);

      data.forEach(business => {
        const listItem = createListItem(business);
        list.appendChild(listItem);
      });
    }
  }

  function createCard(business) {
    const card = document.createElement('div');
    card.classList.add('card');
  
  const logo = document.createElement('img');
    logo.src = business.logo;
    logo.alt = business.name + ' Logo';
    card.appendChild(logo);
  
    const address = document.createElement('p');
    address.innerText = 'Address: ' + business.address;
    card.appendChild(address);
  
    const phone = document.createElement('p');
    phone.innerText = 'Phone: ' + business.phone;
    card.appendChild(phone);
  
    const website = document.createElement('a');
    website.href = business.website;
    website.innerText = 'Visit Website';
    card.appendChild(website);
  
    return card;
  }

   // Function to create a list item for the business
   function createListItem(business) {
    const listItem = document.createElement('li');

    const title = document.createElement('h2');
    title.innerText = business.name;
    listItem.appendChild(title);

    const address = document.createElement('p');
    address.innerText = 'Address: ' + business.address;
    listItem.appendChild(address);

    const phone = document.createElement('p');
    phone.innerText = 'Phone: ' + business.phone;
    listItem.appendChild(phone);

    const website = document.createElement('p');
    website.innerText = 'Visit Website' + business.website;
    listItem.appendChild(website)

    return listItem;
  }
  // Function to toggle between grid and list view
  function toggleView(view) {
    currentView = view;
    fetchData();
  }

  // Initial load with grid view
  let currentView = 'grid';
  fetchData();