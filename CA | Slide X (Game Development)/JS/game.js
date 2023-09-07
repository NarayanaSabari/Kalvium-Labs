const INITIAL_VELOCITY = 0.025;

class Ball {
  constructor(ballElement) {
    this.ballElement = ballElement;
    this.reset();
  }

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

  bounce() {
    return this.ballElement.getBoundingClientRect();
  }

  reset() {
    this.x = 50;
    this.y = 50;
    this.direction = { x: 0 };
    while (
      Math.abs(this.direction.x) <= 0.2 || //this one for -ve x
      Math.abs(this.direction.x) >= 0.9 // this one for +ve x
    ) {
      const heading = randomNumberBetween(0, 2 * Math.PI);
      this.direction = { x: Math.cos(heading), y: Math.sin(heading) };
    }
    this.velocity = INITIAL_VELOCITY;
  }

  update(delta) {
    this.x += this.direction.x * this.velocity * delta;
    this.y += this.direction.y * this.velocity * delta;
    const bounce = this.bounce();

    if (bounce.bottom >= window.innerHeight || bounce.top <= 0) {
      this.direction.y *= -1;
    }
  }
}

class Player1_Pad {
  constructor(player1_pad) {
    this.player1_pad = player1_pad;
    // this.reset();
  }
  get position() {
    return parseFloat(
      getComputedStyle(this.player1_pad).getPropertyValue("--player1_position")
    );
  }
  set position(value) {
    this.player1_pad.style.setProperty("--player1_position", value);
  }
  update(moment) {
    this.position += moment;
  }
}
class Player2_Pad {
  constructor(player2_pad) {
    this.player2_pad = player2_pad;
    // this.reset();
  }
  get position() {
    return parseFloat(
      getComputedStyle(this.player2_pad).getPropertyValue("--player2_position")
    );
  }
  set position(value) {
    this.player2_pad.style.setProperty("--player2_position", value);
  }
}

function randomNumberBetween(min, max) {
  return Math.random() * (max - min) + min;
}

const ball = new Ball(document.getElementById("ball"));
const player1_pad = new Player1_Pad(document.getElementById("player1-pad"));
const player2_pad = new Player2_Pad(document.getElementById("player2-pad"));

function update(time) {
  if (lasttime != null) {
    const delta = time - lasttime;
    ball.update(delta);
  }
  document.addEventListener("keyup", function (event) {
    if (event.key == "w" || event.key == "W") {
      player1_pad.update(-1);
    } else if (event.key == "s" || event.key == "S") {
      player1_pad.update(Math.abs(1));
    } else if (event.key == "ArrowUp") {
    } else if (event.key == "ArrowDown") {
    }
  });
  lasttime = time;
  window.requestAnimationFrame(update);
}

let pad_speed = -0.05;
let lasttime;
window.requestAnimationFrame(update);
