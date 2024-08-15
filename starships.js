// Liknande funktioner som för Index sidan med modifikationer för "starships" under samma API. Använder ett objekt istället för Array

let ship = {};

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

function createShipButtons(myData) {
  const charListElement = document.getElementById("charList");

  myData.forEach((char) => {
    const listItem = document.createElement("button");
    listItem.textContent = char.name;
    charListElement.appendChild(listItem);

    listItem.addEventListener("click", () => displayShipInfo(char));
  });
}

function displayShipInfo(ship) {
  const info = document.getElementById("renderInfo");
  info.innerHTML = `Name: ${ship.name}<br>
    manufacturer: ${ship.manufacturer}<br>
    Length: ${ship.length}<br>
    Class: ${ship.starship_class}<br>
    Cargo Capacity: ${ship.cargo_capacity}<br>`;

  const addButton = document.createElement("button");
  addButton.textContent = "Select Ship";
  info.appendChild(addButton);

  addButton.addEventListener("click", () => addShip(ship.name));
}

function addShip(shipName) {
  ship = shipName;
  const storageship = JSON.stringify(ship);
  localStorage.setItem("ship", storageship);

  renderSelection();
  console.log(ship);
}

function renderSelection() {
  const retrievedString = localStorage.getItem("ship");
  const retrievedStringLocal = JSON.parse(retrievedString);

  const select = document.getElementById("mySelection");

  select.textContent = retrievedStringLocal;
}

function startStarships() {
  fetchData("https://swapi.dev/api/starships", createShipButtons);
}

renderSelection();

startStarships();
