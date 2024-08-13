function writeNames() {
  const retrievedArrayString = localStorage.getItem("crew");
  const retrievedArray = JSON.parse(retrievedArrayString);

  const output = document.getElementById("names");
  output.textContent = retrievedArray;
}

writeNames();