// Check if the window width is less than 768 pixels (mobile view)
if (window.innerWidth < 768) {
  // Hide the game point input and submit button initially
  document.getElementById("game_point").style.display = "none";
  document.querySelector("#button").style.display = "none";

  // Get all elements with the class "levels"
  const levelElements = document.querySelectorAll(".levels");

  // Add click event listeners to each "level" element
  levelElements.forEach((element) => {
    element.addEventListener("click", handleLevelSelection);
  });

  // Function to handle level selection for mobile view
  function handleLevelSelection(event) {
    // Get the clicked level element
    const selectedLevel = event.target;

    // Get the text content of the selected level
    const selectedLevelText = selectedLevel.textContent;

    // Store the selected level in local storage for later use
    localStorage.setItem("gameLevel", selectedLevelText);

    // Display the game point input and submit button
    document.getElementById("game_point").style.display = "block";
    document.querySelector("#button").style.display = "flex";

    // Hide the level selector
    document.querySelector("#level_selector").style.display = "none";

    // Add a submit event listener to the game point form
    const gamePointForm = document.getElementById("game_point_reader");
    gamePointForm.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent the form from submitting and refreshing the page

      // Get the game point input value
      const gamePoint = document.getElementById("max_point").value;

      // Store the game point data in local storage
      localStorage.setItem("game_point", gamePoint);

      // Redirect to the Game Page
      window.location.href = "game.html";
    });
  }
} else {
  // Desktop view handling

  // Add a submit event listener to the game point form for desktop
  const gamePointForm = document.getElementById("game_point_reader");
  gamePointForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from submitting and refreshing the page

    // Get the game point input value
    const gamePoint = document.getElementById("max_point").value;

    // Store the game point data in local storage
    localStorage.setItem("game_point", gamePoint);

    // Redirect to the Game Page
    window.location.href = "game.html";
  });

  // Get all elements with the class "levels"
  const levelElements = document.querySelectorAll(".levels");

  // Add click event listeners to each "level" element for desktop
  levelElements.forEach((element) => {
    element.addEventListener("click", handleLevelSelection);
  });

  // Function to handle level selection for desktop view
  function handleLevelSelection(event) {
    const levelElements = document.querySelectorAll(".levels");

    // Remove the "selected" class from all level elements and add default classes
    levelElements.forEach((element) => {
      element.classList.remove("selected", "border_color");
      element.classList.add("text_bgcolor", "text_color");
    });

    // Get the clicked level element
    const selectedLevel = event.target;

    // Add the "selected" class and border_color class to the clicked level
    selectedLevel.classList.add("selected", "border_color");
    selectedLevel.classList.remove("text_bgcolor", "text_color");

    // Get the selected level's text
    const selectedLevelText = selectedLevel.textContent;

    // Store the selected level in local storage for later use
    localStorage.setItem("gameLevel", selectedLevelText);
  }
}
