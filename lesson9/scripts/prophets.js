const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.prophets);  // note that we reference the prophet array of the data object given the structure of the json file
    displayProphets(data.prophets);
  }
  
  getProphetData();

  const displayProphets = (prophets) => {
    const cards = document.querySelector('div.cards'); // select the output container element
  
    prophets.forEach((prophet) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let portrait = document.createElement('img');
      const birthDate = document.createElement('p');
      const birthPlace = document.createElement('p');
      const age = document.createElement('p');


      const birthYear = parseInt(prophet.birthdate.split(' ')[2]);
      const currentYear = new Date().getFullYear();
      const prophetAge = currentYear - birthYear;

      let ageInfo = '';
    if (prophet.death) {
      const deathYear = parseInt(prophet.death.split(' ')[2]);
      const ageAtDeath = deathYear - birthYear;
      ageInfo = `Age at Death: ${ageAtDeath}`;
    } else {
      ageInfo = `Current Age: ${prophetAge}`;
    }
  
      // Build the h2 content out to show the prophet's full name - finish the template string
      h2.textContent = `${prophet.name} ${prophet.lastname}`;
      birthDate.textContent = `Birth Date: ${prophet.birthdate}`;
      birthPlace.textContent = `Birth Place: ${prophet.birthplace}`;
      age.textContent = ageInfo;

  
      // Build the image portrait by setting all the relevant attribute
      portrait.setAttribute('src', prophet.imageurl);
      portrait.setAttribute('alt', `Portait of ${prophet.name} ______________`);
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '340');
      portrait.setAttribute('height', '440');
  
      // Append the section(card) with the created elements
      card.appendChild(h2);
      card.appendChild(portrait);
      card.appendChild(birthDate);
      card.appendChild(birthPlace);
      card.appendChild(age);

  
      cards.appendChild(card);
    });// end of forEach loop
  }; // end of function expression


