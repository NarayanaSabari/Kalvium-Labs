// Add an event listener to the form submission
document
  .getElementById("player_details")
  .addEventListener("submit", function (e) {
    // Prevent the form from submitting and refreshing the page
    e.preventDefault();

    // Get values from the form
    const player1Name = document.getElementById("player1-name").value;
    const player1Nickname = document.getElementById("player1-nickname").value;
    const player2Name = document.getElementById("player2-name").value;
    const player2Nickname = document.getElementById("player2-nickname").value;

    // Store the collected data in local storage
    localStorage.setItem("player1_name", player1Name);
    localStorage.setItem("player2_name", player2Name);
    localStorage.setItem("player1_nickname", player1Nickname);
    localStorage.setItem("player2_nickname", player2Nickname);

    // redirecting to Game level Page
    window.location.href = "leves.html";
  });
