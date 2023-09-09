import { themeUpdate, themeSelector } from "./style.js";
themeUpdate(localStorage.getItem("themeID"));
document.getElementById("start_btn").addEventListener("click", () => {
  // Redirect to the "levels.html" page when the restart button is clicked
  window.location.href = "player_info.html";
});
themeSelector();

