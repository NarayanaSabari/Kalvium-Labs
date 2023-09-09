// Settingup the selected theme
import { themeUpdate } from "./style.js";
themeUpdate(localStorage.getItem("themeID"));
// Get references to the form and player sections
const playerDetailsForm = document.getElementById("player_details");
const player1Section = document.getElementById("player1");
const player2Section = document.getElementById("player2");
let background_music = new Audio("assets/bg.mp3");
background_music.play();
background_music.loop = true;
// Check if the window width is less than 768px
if (window.innerWidth < 768) {
  // Hide the initial submit button
  document.querySelector("#player_details > #button").style.display = "none";

  // Add a click event listener to the "Next" button
  document.querySelector(".next").addEventListener("click", function () {
    // Get values from Player 1 input fields
    const player1Name = document.getElementById("player1-name").value;
    const player1Nickname = document.getElementById("player1-nickname").value;

    // Check if Player 1 fields are empty
    if (!player1Name || !player1Nickname) {
      alert("Please fill in all Player 1 fields.");
      return;
    }

    // Store Player 1 data in local storage
    localStorage.setItem("player1_name", player1Name);
    localStorage.setItem("player1_nickname", player1Nickname);

    // Hide "Next" button and show the submit button
    document.querySelector(".next").style.display = "none";
    document.querySelector("#player_details > #button").style.display = "flex";

    // Hide Player 1 section and show Player 2 section
    player1Section.style.display = "none";
    player2Section.style.display = "block";

    // Prevent form submission on "Next" button click
    document
      .getElementById("player_details")
      .addEventListener("submit", function (e) {
        e.preventDefault();
      });
  });

  // Add a submit event listener to the form
  document
    .getElementById("player_details")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      // Get values from Player 2 input fields
      const player2Name = document.getElementById("player2-name").value;
      const player2Nickname = document.getElementById("player2-nickname").value;

      // Check if Player 2 fields are empty
      if (!player2Name || !player2Nickname) {
        alert("Please fill in all Player 2 fields.");
        return;
      }

      // Store Player 2 data in local storage
      localStorage.setItem("player2_name", player2Name);
      localStorage.setItem("player2_nickname", player2Nickname);

      // Redirect to the "leves.html" page
      window.location.href = "leves.html";
    });
} else {
  document.querySelector(".next").style.display = "none";
  // Add a submit event listener to the form for larger screens
  playerDetailsForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get values from all input fields
    const player1Name = document.getElementById("player1-name").value;
    const player1Nickname = document.getElementById("player1-nickname").value;
    const player2Name = document.getElementById("player2-name").value;
    const player2Nickname = document.getElementById("player2-nickname").value;

    // Check if any of the fields are empty
    if (!player1Name || !player1Nickname || !player2Name || !player2Nickname) {
      alert("Please fill in all fields.");
      return;
    }

    // Store all collected data in local storage
    localStorage.setItem("player1_name", player1Name);
    localStorage.setItem("player2_name", player2Name);
    localStorage.setItem("player1_nickname", player1Nickname);
    localStorage.setItem("player2_nickname", player2Nickname);

    // Redirect to the "leves.html" page
    window.location.href = "leves.html";
  });
}
