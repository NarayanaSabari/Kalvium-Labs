const num1Elem = document.getElementById("number1");
const num2Elem = document.getElementById("number2");

const timerElem = document.getElementById("timer");

let number1;
let number2;
let score = 0;
let intervalId;
let timeRemaining;

function randomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

// Iteration 4: Build a timer for the game
function startInterval() {
  intervalId = setInterval(() => {
    timeRemaining--;
    timerElem.innerText = timeRemaining;
    if (timeRemaining == 0) gameOver();
  }, 1000);
}

function stopInterval() {
  clearInterval(intervalId);
  timeRemaining = 5;
  timerElem.innerText = timeRemaining;
}

function gameOver() {
  stopInterval();
  window.location.href = "./gameover.html";
  localStorage.setItem("score", score);
}

function displayRandomNumber() {
  stopInterval();
  number1 = randomNumber();
  number2 = randomNumber();
  num1Elem.innerText = number1;
  num2Elem.innerText = number2;
  startInterval();
}

function compareNumber(operation) {
  if (
    (operation == "greater-than" && number1 > number2) ||
    (operation == "lesser-than" && number1 < number2) ||
    (operation == "equal-to" && number1 === number2)
  ) {
    score++;
    displayRandomNumber();
  } else gameOver();
}

// Iteration 2: Generate 2 random number and display it on the screen
displayRandomNumber();

// Iteration 3: Make the options button functional
const btnContainer = document.getElementById("buttons");
btnContainer.addEventListener("click", (e) => compareNumber(e.target.id));