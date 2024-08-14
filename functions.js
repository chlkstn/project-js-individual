// array för din lista av karaktärer

//hämtar info från api och skapar knappar för varje karaktär

// Array for the list of selected items

// Fetches data from the API and creates buttons for each ship
async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.results);
    createCharacterButtons(data.results);
    return data;
  } catch (error) {
    console.error(error);
  }
}

// Creates buttons for each char and sets up event listeners
function createCharacterButtons(myData) {
  const charListElement = document.getElementById("charList");

  myData.forEach((char) => {
    const listItem = document.createElement("button");
    listItem.textContent = char.name;
    charListElement.appendChild(listItem);

    listItem.addEventListener("click", () => displayCharInfo(char));
  });
}

// Displays information about the selected Character and creates the "add to crew" button
function displayCharInfo(char) {
  const info = document.getElementById("renderInfo");
  info.innerHTML = `Name: ${char.name}<br>
     Height: ${char.height}<br>
      Gender: ${char.gender}<br>
       Eyecolor: ${char.eye_color}<br>
        BirthYear: ${char.birth_year}<br>`;

  const addButton = document.createElement("button");
  addButton.textContent = "Add to crew";
  info.appendChild(addButton);

  addButton.addEventListener("click", () => addToCrew(char.name));
  const remButton = document.createElement("button");
  remButton.textContent = "Remove";
  info.appendChild(remButton);

  remButton.addEventListener("click", () => removeCrew(char.name));
}

// Add directly to local storage
function addToCrew(charName) {
  if (charList.includes(charName)) {
    console.log("Already in the crew");
  } else {
    charList.push(charName);
    const storageChar = JSON.stringify(charList);
    localStorage.setItem("crew", storageChar);

    renderSelection();
    console.log(charList);
  }
}

function removeCrew(charName) {
  // Remove the ship from the array
  charList = charList.filter((char) => char !== charName);

  // Update local storage
  localStorage.setItem("crew", JSON.stringify(charList));

  // Re-render the selection menu
  renderSelection();
}

// Renders the selected  in the selection menu
function renderSelection() {
  const retrievedArrayString = localStorage.getItem("crew");
  const retrievedArray = JSON.parse(retrievedArrayString);

  const select = document.getElementById("mySelection");
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
  fetchData();

  setupEventListeners();
}
