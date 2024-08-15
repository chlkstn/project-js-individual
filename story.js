// hämtar alla sparade uppgifter från Local storage och lägger in dem i texten

function writeNames() {
  const retrievedCrewString = localStorage.getItem("crew");
  const retrievedCrew = JSON.parse(retrievedCrewString);

  const output1 = document.getElementById("name1");
  output1.textContent = retrievedCrew[0];
  const output2 = document.getElementById("name2");
  output2.textContent = retrievedCrew[1];
  const output3 = document.getElementById("name3");
  output3.textContent = retrievedCrew[2];
  const output4 = document.getElementById("name4");
  output4.textContent = retrievedCrew[3];
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

writeNames();
writeShip();
writePlanet();
