// Liknande funktioner som för Index sidan med modifikationer för "planets" under samma API 

let planet = {};

async function fetchData(url, buttons) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.results);
    buttons(data.results);
    return data;
  } catch (error) {
    console.error(error);
  }
}

function createPlanetButtons(myData) {
  const charListElement = document.getElementById("charList");

  myData.forEach((char) => {
    const listItem = document.createElement("button");
    listItem.textContent = char.name;
    charListElement.appendChild(listItem);

    listItem.addEventListener("click", () => displayPlanetInfo(char));
  });
}

function displayPlanetInfo(planet) {
  const info = document.getElementById("renderInfo");
  info.innerHTML = `Name: ${planet.name}<br>
    Terrain: ${planet.terrain}<br>
    Climate: ${planet.climate}<br>
    Population: ${planet.population}<br>`;

  const addButton = document.createElement("button");
  addButton.textContent = "Select Planet";
  info.appendChild(addButton);

  addButton.addEventListener("click", () => addPlanet(planet.name));
}

function addPlanet(planetName) {
  planet = planetName;
  const storagePlanet = JSON.stringify(planet);
  localStorage.setItem("planet", storagePlanet);

  renderSelection();
  console.log(planet);
}

function renderSelection() {
  const retrievedString = localStorage.getItem("planet");
  const retrievedStringLocal = JSON.parse(retrievedString);

  const select = document.getElementById("mySelection");

  select.textContent = retrievedStringLocal;
}

function startPlanet() {
  fetchData("https://swapi.dev/api/planets", createPlanetButtons);
}

renderSelection();

startPlanet();

/* localStorage.clear() */
