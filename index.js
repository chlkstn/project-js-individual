// En tom array för att lista valet av karaktärer
let charList = [];

function startIndex() {
  fetchData("https://swapi.dev/api/people");
}

// Fetchar data från ett api  (url) och anropar funktionen "createCharacterButtons"
async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();

    createCharacterButtons(data.results);
    return data;
  } catch (error) {
    console.error(error);
  }
}

// Lägger in varje karaktär i "charList" och skapar knappar för karaktärerna
function createCharacterButtons(myData) {
  const charListElement = document.getElementById("charList");

  myData.forEach((char) => {
    const listItem = document.createElement("button");
    listItem.textContent = char.name;
    charListElement.appendChild(listItem);

    listItem.addEventListener("click", () => displayCharInfo(char));
  });
}

/* Renderar info om varje karaktär i "info rutan". Hämtar nycklar från API:et. */
/* Användaren kan spara karaktärerna i sitt crew med hjälp av en knapp som anropar "add to crew- funktionen" */
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

// Sparar valet av karaktärer i Local storage. Max 4 karaktärer
function addToCrew(charName) {
  if (charList.includes(charName)) {
    window.alert("Already in the crew");
  } else if (charList.length > 3) {
    window.alert("max 4 people in crew");
  } else {
    charList.push(charName);
    const storageChar = JSON.stringify(charList);
    localStorage.setItem("crew", storageChar);

    renderSelection();
    console.log(charList);
  }
}

// Tar bort karaktären från ditt crew

function removeCrew(charName) {
  charList = charList.filter((char) => char !== charName);

  localStorage.setItem("crew", JSON.stringify(charList));

  renderSelection();
}

// renderar ut dina karaktärer från local storage i "my crew "

function renderSelection() {
  const retrievedArrayString = localStorage.getItem("crew");
  const retrievedArray = JSON.parse(retrievedArrayString);

  const select = document.getElementById("mySelection");

  select.textContent = retrievedArray;
}

//Startar sidan genom att först rendera ut ditt val från Local storage och sedan köra start index

renderSelection();
startIndex();
