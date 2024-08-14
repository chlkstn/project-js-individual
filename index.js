// Array for the list of selected items
let charList = [];

// Initialize the application
function startIndex() {
  fetchData("https://swapi.dev/api/people");
}

renderSelection();
startIndex();
