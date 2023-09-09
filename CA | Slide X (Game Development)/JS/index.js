// import { themeUpdate, themeSelector } from "./style.js";
// const themeName = ["Dark", "Blue Knight", "Green Angle"];
// themeUpdate(1);
// themeNameUpdate(1);
// const themeID = themeSelector();
// export function themeNameUpdate(id) {
//   const themeNameBox = document.querySelector("#theam_box>h2");
//   themeNameBox.textContent = themeName[id];
// }
// document.getElementById("start_btn").addEventListener("click", () => {
//   // Redirect to the "levels.html" page when the restart button is clicked
//   window.location.href = "player_info.html";
// });
// document.querySelectorAll(".arrows").forEach((arrow) => {
//   arrow.addEventListener("click", () => {
//     themeNameUpdate(themeID);
//   });
// });
import { themeUpdate, themeSelector } from "./style.js";

const themeName = ["Dark Retro", "Blue Knight", "Green Angle"];

export function themeNameUpdate(id) {
  const themeNameBox = document.querySelector("#theam_box > h2"); // Corrected the typo in the selector
  themeNameBox.textContent = themeName[id];
}

themeUpdate(1);
themeNameUpdate(1); // Calling themeNameUpdate after defining the function
themeSelector();

document.getElementById("start_btn").addEventListener("click", () => {
  // Redirect to the "levels.html" page when the restart button is clicked
  window.location.href = "player_info.html";
});

document.querySelectorAll(".arrows").forEach((arrow) => {
  arrow.addEventListener("click", () => {
    const themeID = localStorage.getItem("themeID");
    themeNameUpdate(themeID); // Corrected the function call
  });
});
