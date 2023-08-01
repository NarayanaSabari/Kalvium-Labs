// let score = Math.floor(Math.random() * (6 - 0)) + 0;
// console.log(score);

const value = [0, 1, 2, 3, 4, 6, "W"];

var ball = document.querySelectorAll(".balls");
var team1Score = document.querySelector("#team1-score");
var team2Score = document.querySelector("#team2-score");
var team1Wicket = document.querySelector("#team1-wickets");
var team2Wicket = document.querySelector("#team2-wickets");
var balls = 0;
var score = 0;
var team1S = 0;
var team2S = 0;
var team1W = 0;
var team2W = 0;

function updater(team1S, team2S, team1W, team2W) {
  team1Score.innerText = team1S;
  team2Score.innerText = team2S;
  team1Wicket.innerText = team1W;
  team2Wicket.innerText = team2W;
}
function ballScore(score, balls) {
  ball[balls].innerText = score;
}
function strick() {
  score = value[Math.floor(Math.random() * (7 - 0)) + 0];
  ballScore(score, balls);
  if (balls < 6) {
    if (score == "W") {
      team1W += 1;
    } else {
      team1S += score;
    }
  } else if (balls >= 11) {
    winning(team1S, team2S);
  } else {
    if (score == "W") {
      team2W += 1;
    } else {
      team2S += score;
    }
  }
  updater(team1S, team2S, team1W, team2W);
  balls += 1;
}

function reset() {
  window.location.reload();
}

function winning(team1S, team2S) {
  if (team1S > team2S) {
    alert("IND Wins!");
  } else if (team1S < team2S) {
    alert("PAK Wins!");
  } else {
    alert("Its a tie!");
  }
  reset();
}
