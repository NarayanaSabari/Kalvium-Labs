// Constants
const INITIAL_VELOCITY = 0.055;
const PADDLE_SPEED = 5;

// Ball class
class Ball {
  constructor(ballElement) {
    this.ballElement = ballElement;
    this.reset();
  }

  // Getters and setters for ball position
  get x() {
    return parseFloat(
      getComputedStyle(this.ballElement).getPropertyValue("--x")
    );
  }

  set x(value) {
    this.ballElement.style.setProperty("--x", value);
  }

  get y() {
    return parseFloat(
      getComputedStyle(this.ballElement).getPropertyValue("--y")
    );
  }

  set y(value) {
    this.ballElement.style.setProperty("--y", value);
  }

  // Method to determine ball bounce
  bounce() {
    return this.ballElement.getBoundingClientRect();
  }

  // Reset ball to initial position
  reset() {
    this.x = 50;
    this.y = 50;
    this.direction = { x: 0 };

    // Generate a random initial direction
    while (
      Math.abs(this.direction.x) <= 0.2 ||
      Math.abs(this.direction.x) >= 0.9
    ) {
      const heading = randomNumberBetween(0, 2 * Math.PI);
      this.direction = { x: Math.cos(heading), y: Math.sin(heading) };
    }

    this.velocity = INITIAL_VELOCITY;
  }

  // Update ball position
  update(delta, paddleBounds) {
    this.x += this.direction.x * this.velocity * delta;
    this.y += this.direction.y * this.velocity * delta;
    const bounce = this.bounce();

    // Check for vertical wall bounce
    if (bounce.bottom >= window.innerHeight || bounce.top <= 0) {
      this.direction.y *= -1;
    }

    // Check for paddle bounce
    if (paddleBounds.some((r) => isColliding(r, bounce))) {
      this.direction.x *= -1;
    }
  }
}

// Function to check collision between two rectangles
function isColliding(paddle, bounce) {
  return (
    paddle.left <= bounce.right &&
    paddle.right >= bounce.left &&
    paddle.top <= bounce.bottom &&
    paddle.bottom >= bounce.top
  );
}
// Paddle class
class Paddle {
  constructor(element, initialPosition) {
    this.element = element;
    this.y = initialPosition;
  }

  // Reset paddle to initial position
  reset() {
    this.y = 50;
    this.updatePosition();
  }

  // Move paddle up
  moveUp(speed) {
    this.y -= speed;
    this.updatePosition();
  }

  // Move paddle down
  moveDown(speed) {
    this.y += speed;
    this.updatePosition();
  }

  // Get paddle's bounding rectangle
  paddle_bounce() {
    return this.element.getBoundingClientRect();
  }

  // Update paddle position
  updatePosition() {
    // Ensure the paddle stays within the game area (0% to 100%)
    this.y = Math.min(Math.max(this.y, 0), 100);
    this.element.style.top = this.y + "%";
  }
}
// Function to generate a random number between min and max
function randomNumberBetween(min, max) {
  return Math.random() * (max - min) + min;
}

// Function to check if the ball is out of bounds (lost)
function isLose() {
  const rect = ball.bounce();
  return rect.right >= window.innerWidth || rect.left <= 0;
}

// Function to handle the game loss condition
function handleLose() {
  const rect = ball.bounce();
  if (rect.right >= window.innerWidth) {
    player1_score.textContent = parseInt(player1_score.textContent) + 1;
  } else {
    player2_score.textContent = parseInt(player2_score.textContent) + 1;
  }
  ball.reset();
  player1Paddle.reset();
  player2Paddle.reset();
}
// Game loop update function
function update(time) {
  if (lastTime != null) {
    const delta = time - lastTime;
    ball.update(delta, [
      player1Paddle.paddle_bounce(),
      player2Paddle.paddle_bounce(),
    ]);
  }
  lastTime = time;
  window.requestAnimationFrame(update);
  if (isLose()) handleLose();
}
// Initialization
let lastTime;
window.requestAnimationFrame(update);

const ball = new Ball(document.getElementById("ball"));
const player1_score = document.getElementById("player1-score");
const player2_score = document.getElementById("player2-score");


// Create instances of the Paddle class for player 1 and player 2
const player1Paddle = new Paddle(document.getElementById("player1-pad"), 50);
const player2Paddle = new Paddle(document.getElementById("player2-pad"), 50);

// Event listener for paddle movement
document.addEventListener("keydown", function (event) {
  // Player 1 controls (W and S)
  if (event.key === "w" || event.key === "W") {
    player1Paddle.moveUp(PADDLE_SPEED);
  } else if (event.key === "s" || event.key === "S") {
    player1Paddle.moveDown(PADDLE_SPEED);
  }

  // Player 2 controls (Up and Down arrows)
  if (event.key === "ArrowUp") {
    player2Paddle.moveUp(PADDLE_SPEED);
  } else if (event.key === "ArrowDown") {
    player2Paddle.moveDown(PADDLE_SPEED);
  }
});
