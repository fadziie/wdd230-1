// Function to fetch data from the JSON file
function fetchData() {
  fetch('businesses.json')
    .then(response => response.json())
    .then(data => displaySpotlight(data));
}

// Function to display spotlight information
function displaySpotlight(data) {
  const silverGoldMembers = data.filter(business => business.membershipLevel === "Silver Membership" || business.membershipLevel === "Gold Membership");
  
  // Randomly select two to three members
  const selectedMembers = getRandomMembers(silverGoldMembers, 2, 3);
  
  // Populate spotlight sections with member data
  const spotlight1 = document.getElementById('spotlight1');
  spotlight1.querySelector('h3').innerText = selectedMembers[0].name;
  spotlight1.querySelector('p').innerText = selectedMembers[0].address;
  spotlight1.querySelector('.phone').innerText = 'Phone: ' + selectedMembers[0].phone;

  const spotlight2 = document.getElementById('spotlight2');
  spotlight2.querySelector('h3').innerText = selectedMembers[1].name;
  spotlight2.querySelector('p').innerText = selectedMembers[1].address;
  spotlight2.querySelector('.phone').innerText = 'Phone: ' + selectedMembers[1].phone;

  if (selectedMembers.length === 3) {
    const spotlight3 = document.getElementById('spotlight3');
    spotlight3.querySelector('h3').innerText = selectedMembers[2].name;
    spotlight3.querySelector('p').innerText = selectedMembers[2].address;
    spotlight3.querySelector('.phone').innerText = 'Phone: ' + selectedMembers[2].phone;
  }
}

// Function to randomly select members
function getRandomMembers(members, min, max) {
  const selectedMembers = [];
  const numMembers = Math.floor(Math.random() * (max - min + 1)) + min;

  for (let i = 0; i < numMembers; i++) {
    const randomIndex = Math.floor(Math.random() * members.length);
    selectedMembers.push(members[randomIndex]);
    members.splice(randomIndex, 1);
  }

  return selectedMembers;
}

// Fetch data and display spotlight
fetchData();
