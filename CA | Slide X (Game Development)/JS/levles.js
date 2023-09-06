// Form submission event
const gamePointForm = document.getElementById("game_point_reader");
gamePointForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the form from submitting and refreshing the page

  // Get the game point input value
  const gamePoint = document.getElementById("max_point").value;

  // Store the data in local storage
  localStorage.setItem("game_point", gamePoint);

  // Redirect to the Game Page
  window.location.href = "game.html";
});

// Checking for the selected game level
const levelElements = document.querySelectorAll(".levels");
levelElements.forEach((element) => {
  element.addEventListener("click", handleLevelSelection);
});

// Function to handle level selection
function handleLevelSelection(event) {
  const levelElements = document.querySelectorAll(".levels");

  // Remove the "selected" class from all level elements and add the default classes
  levelElements.forEach((element) => {
    element.classList.remove("selected", "border_color");
    element.classList.add("text_bgcolor", "text_color");
  });

  // Add the "selected" class and border_color class to the clicked level
  const selectedLevel = event.target;
  selectedLevel.classList.add("selected", "border_color");
  selectedLevel.classList.remove("text_bgcolor", "text_color");

  // Get the selected level's text
  const selectedLevelText = selectedLevel.textContent;

  // Store the selected level in local storage
  localStorage.setItem("selectedLevel", selectedLevelText);
} 
