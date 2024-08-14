// array för din lista av karaktärer

//hämtar info från api och skapar knappar för varje karaktär

// Array for the list of selected ships
let shipList = [];

// Fetches data from the API and creates buttons for each ship
async function fetchCharacters() {
  try {
    const response = await fetch("https://swapi.dev/api/starships");
    const data = await response.json();
    console.log(data.results);
    createCharacterButtons(data.results);
    return data;
  } catch (error) {
    console.error(error);
  }
}

// Creates buttons for each ship and sets up event listeners
function createCharacterButtons(myData) {
  const charListElement = document.getElementById("charList");

  myData.forEach((char) => {
    const listItem = document.createElement("button");
    listItem.textContent = char.name;
    charListElement.appendChild(listItem);

    listItem.addEventListener("click", () => displayShipInfo(char));
  });
}

// Displays information about the selected ship and creates the "add to crew" button
function displayShipInfo(ship) {
  const info = document.getElementById("charInfo");
  info.textContent = `Name: ${ship.name}, Height: ${ship.height}`;

  const addButton = document.createElement("button");
  addButton.textContent = "Add to crew";
  info.appendChild(addButton);

  addButton.addEventListener("click", () => addToCrew(ship.name));
  const remButton = document.createElement("button");
  remButton.textContent = "Remove";
  info.appendChild(remButton);

  remButton.addEventListener("click", () => removeCrew(ship.name));
}

// Adds the ship to the crew if it's not already there, and renders the selection

// TODO Add directly to local storage
function addToCrew(shipName) {
  if (shipList.includes(shipName)) {
    console.log("Already in the garage");
  } else {
    shipList.push(shipName);
    const storageShip = JSON.stringify(shipList);
    localStorage.setItem("ship", storageShip);

    renderSelection();
    console.log(shipList);
  }
}

function removeCrew(shipName) {
  // Remove the ship from the array
  shipList = shipList.filter((ship) => ship !== shipName);

  // Update local storage
  localStorage.setItem("ship", JSON.stringify(shipList));

  // Re-render the selection menu
  renderSelection();
}

// Renders the selected ships in the selection menu
function renderSelection() {
  const retrievedArrayString = localStorage.getItem("ship");
  const retrievedArray = JSON.parse(retrievedArrayString);

  const select = document.getElementById("selectionMenu");
  select.textContent = retrievedArray;
}

// Saves the selected crew to local storage and navigates to the story page
function saveCrew() {
  const storageShip = JSON.stringify(shipList);
  localStorage.setItem("ship", storageShip);
  console.log(storageShip);
  window.location.href = "story.html";
}

// Sets up the save crew button event listener
function setupEventListeners() {
  document.getElementById("saveCrew").addEventListener("click", saveCrew);
}

// Initialize the application
function startPage() {
  fetchCharacters();
  setupEventListeners();
}

startPage();
