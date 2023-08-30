// Iteration 1: Declare variables required for this game
const game_body = document.getElementById("game-body");
let lives = 4;
let time = 60;
let zombiID = 0;
let zombi;

// Iteration 1.2: Add shotgun sound
let short_gun_sound = new Audio("assets/shotgun.wav");
game_body.onclick = () => {
  short_gun_sound.pause();
  short_gun_sound.currentTime = 0;
  short_gun_sound.play();
};

// Iteration 1.3: Add background sound
let background_music = new Audio("assets/bgm.mp3");
background_music.play();
background_music.loop = true;

// Iteration 2: Write a function to make a zombie
function generate_zombie() {
  let num = generate_unique_number(1, 7);
  game_body.innerHTML += `<img src="assets/zombie-${num}.png" class='zombie-image' id='zombiID${zombiID}'>`;
  zombi = document.getElementById(`zombiID${zombiID}`);
  let second = generate_unique_number(2, 6);
  zombi.style.animationDuration = `${second}s`;
  zombi.style.transform = `translateX(${generate_unique_number(20, 80)}vw)`;
  zombi.onclick = () => destroy_zombie(zombi);
}

// Iteration 3: Write a function to check if the player missed a zombie
function escape_zombie(zombi) {
  if (zombi.getBoundingClientRect().top <= 0) {
    lives--;
    destroy_zombie(zombi);
  }
}

// Iteration 4: Write a function to destroy a zombie when it is shot or missed
function destroy_zombie(zombi) {
  zombi.style.display = "none";
  zombiID++;
  generate_zombie();
}

// Iteration 5: Creating timer
setInterval(timer, 1000);

function timer() {
  if (time < 0 || lives <= 0) {
    location.href = lives <= 0 ? "game-over.html" : "win.html";
  } else {
    time--;
    let timerElement = document.getElementById("timer");
    timerElement.innerHTML = time;
    escape_zombie(zombi);
  }
}

// Helper function to generate unique numbers
function generate_unique_number(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Iteration 6: Write a code to start the game by calling the first zombie
generate_zombie();

// Iteration 7: Write the helper function to get a random integer
// (You can add this function as needed)
