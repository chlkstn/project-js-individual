// array för din lista av karaktärer

let crewList = [];

//hämtar info från api och skapar knappar för varje karaktär

async function fetchCharacters() {
  try {
    let response = await fetch("https://swapi.dev/api/people");
    let data = await response.json();
    console.log(data.results);
    let cList = data.results;

    for (let i = 0; i < cList.length; i++) {
      console.log(cList[i].name);
      const listItem = document.createElement("button");
      listItem.innerHTML = cList[i].name;

      document.getElementById("charList").appendChild(listItem);

      //skapar info om karaktären samt en knapp att lägga till crew

      listItem.addEventListener("click", function () {
        const info = document.getElementById("charInfo");
        const addButton = document.createElement("button");
        addButton.textContent = "add to crew";

        info.textContent =
          "name " + cList[i].name + " height " + cList[i].height;

        document.getElementById("charInfo").appendChild(addButton);

        // om karatären redan finns i listan kommer ett felmedelande
        addButton.addEventListener("click", function () {
          if (crewList.includes(cList[i].name)) {
            console.log("already in the crew");
          } else {
            crewList.push(cList[i].name);
            renderSelection();

            console.log(crewList);
          }
        });
      });
    }

    return data;
  } catch (error) {
    console.log(error);
  }
}

// skriver ut karaktärsvalet i My selection

function renderSelection() {
  const select = document.getElementById("selectionMenu");
  select.textContent = crewList;
}

//Sparar karaktärerna till Local storage

document.getElementById("saveCrew").addEventListener("click", function () {
  const storageChar = JSON.stringify(crewList);
  localStorage.setItem("crew", storageChar);
  console.log(storageChar);
  window.location.href = "story.html";
});

fetchCharacters();

// CRUD operationer
/* let crew = [];

let leia = "name leia";
let luke = "name luke";
let jabba = "name jabba";

const leiaBtn = document.getElementById("leiaBTN");
const lukeBtn = document.getElementById("lukeBTN");
const jabbaBtn = document.getElementById("jabbaBTN");
const saveBtn = document.getElementById("saveBTN");
const loadBtn = document.getElementById("loadBTN");
const deleteBtn = document.getElementById("deleteBTN");

leiaBtn.addEventListener("click", function () {
  const output = document.getElementById("print");
  output.textContent = leia;
  crew.push(leia);
  console.log(crew);
});
lukeBtn.addEventListener("click", function () {
  const output = document.getElementById("print");
  output.textContent = luke;
  crew.push(luke);
  console.log(crew);
});

jabbaBtn.addEventListener("click", function () {
  const output = document.getElementById("print");
  output.textContent = jabba;
  crew.push(jabba);
  console.log(crew);
});

saveBtn.addEventListener("click", function () {
  const arrayString = JSON.stringify(crew);
  localStorage.setItem("crew", arrayString);
});

loadBtn.addEventListener("click", function () {
  const retrievedArrayString = localStorage.getItem("crew");
  const retrievedArray = JSON.parse(retrievedArrayString);

  const output = document.getElementById("heroList");
  output.textContent = retrievedArray;
});

deleteBtn.addEventListener("click", function () {
  crew.pop();
});
 */
