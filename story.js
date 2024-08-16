// hämtar alla sparade uppgifter från Local storage och lägger in dem i texten

// beroende på antalet crewmembers skrivs storyn ihop på olika sätt med hjälp av if satsen
function writeNames() {
  const retrievedCrewString = localStorage.getItem("crew");
  const retrievedCrew = JSON.parse(retrievedCrewString);
  console.log(retrievedCrew.length);

  if (retrievedCrew.length == 1) {
    const output1 = document.getElementById("name1");
    output1.textContent =
      "The lonely hero " +
      retrievedCrew[0] +
      " set out on a journey to save the galaxy from the evil empire";
  } else if (retrievedCrew.length == 2) {
    const output1 = document.getElementById("name1");
    output1.textContent =
      "The bountyhunter " + retrievedCrew[0] + " set out on a journey";
    const output2 = document.getElementById("name2");
    output2.textContent =
      " together with the brave " + retrievedCrew[1] + "to save the galaxy";
  } else if (retrievedCrew.length == 3) {
    const output1 = document.getElementById("name1");
    output1.textContent =
      "The bountyhunter " + retrievedCrew[0] + " set out on a journey";
    const output2 = document.getElementById("name2");
    output2.textContent = "together with the brave " + retrievedCrew[1];
    const output3 = document.getElementById("name3");
    output3.textContent =
      " and the fearless spacepilot " +
      retrievedCrew[2] +
      " to save the galaxy from the evil empire";
  } else if (retrievedCrew.length == 4) {
    const output1 = document.getElementById("name1");
    output1.textContent =
      "The bountyhunter " + retrievedCrew[0] + " set out on a journey ";
    const output2 = document.getElementById("name2");
    output2.textContent = " together with the brave " + retrievedCrew[1];
    const output3 = document.getElementById("name3");
    output3.textContent =
      " and the fearless spacepilot " +
      retrievedCrew[2] +
      " to save the galaxy from ";
    const output4 = document.getElementById("name4");
    output4.textContent =
      " the corrupted " + retrievedCrew[3] + " who had joined the dark side..";
  }
}

function writeShip() {
  const retrievedShipString = localStorage.getItem("ship");
  const retrievedShip = JSON.parse(retrievedShipString);

  const output = document.getElementById("ship");
  output.textContent = retrievedShip;
}

function writePlanet() {
  const retrievedPlanetString = localStorage.getItem("planet");
  const retrievedPlanet = JSON.parse(retrievedPlanetString);

  const output = document.getElementById("planet");
  output.textContent = retrievedPlanet;
}

const returnBtn = document.getElementById("return");

returnBtn.addEventListener("click", function () {
  window.location.href = "index.html";
});

writeNames();
writeShip();
writePlanet();
