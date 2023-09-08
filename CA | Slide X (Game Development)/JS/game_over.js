// Get the winner from local storage
const winner = localStorage.getItem("Winner");

// Get the winner display element
const winnerDisplay = document.getElementById("winner");

// Set the text content of the winner display element
winnerDisplay.textContent = winner;

// Add a click event listener to the restart button
document.getElementById("restart_btn").addEventListener("click", () => {
  // Redirect to the "levels.html" page when the restart button is clicked
  window.location.href = "leves.html";
});

