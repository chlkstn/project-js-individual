// funktioner för navbar som finns på varje sida

const embarkBtn = document.getElementById("embarkBtn");
const crewBtn = document.getElementById("crewBtn");
const shipBtn = document.getElementById("shipBtn");
const planetBtn = document.getElementById("planetBtn");

// checkar ifall du valt ett crew, starship och valt destination

function embark() {
  const retrieveCrew = localStorage.getItem("crew");
  const retrieveShip = localStorage.getItem("ship");
  const retrievePlanet = localStorage.getItem("planet");

  if (retrievePlanet == null || retrieveCrew == null || retrieveShip == null) {
    window.alert("You are not ready to embark yet");
  } else {
    window.location.href = "story.html";
  }
}

embarkBtn.addEventListener("click", embark);

//länkar till de olika sidorna

crewBtn.addEventListener("click", function () {
  window.location.href = "index.html";
});
shipBtn.addEventListener("click", function () {
  window.location.href = "starships.html";
});
planetBtn.addEventListener("click", function () {
  window.location.href = "planet.html";
});
