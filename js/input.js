const KEYS = {
  ARROWS: {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
  },
};

const keyHeld = {
  gas: false,
  reverse: false,
  turnLeft: false,
  turnRight: false,
};

let mouseX = 0;
let mouseY = 0;

function keyPressed(event) {
  if (event.keyCode === KEYS.ARROWS.LEFT) {
    keyHeld.turnLeft = true;
  }
  if (event.keyCode === KEYS.ARROWS.RIGHT) {
    keyHeld.turnRight = true;
  }
  if (event.keyCode === KEYS.ARROWS.UP) {
    keyHeld.gas = true;
  }
  if (event.keyCode === KEYS.ARROWS.DOWN) {
    keyHeld.reverse = true;
  }
}

function keyReleased(event) {
  if (event.keyCode === KEYS.ARROWS.LEFT) {
    keyHeld.turnLeft = false;
  }
  if (event.keyCode === KEYS.ARROWS.RIGHT) {
    keyHeld.turnRight = false;
  }
  if (event.keyCode === KEYS.ARROWS.UP) {
    keyHeld.gas = false;
  }
  if (event.keyCode === KEYS.ARROWS.DOWN) {
    keyHeld.reverse = false;
  }
}

function setupInput() {
  canvas.addEventListener('mousemove', updateMousePos);
  document.addEventListener('keydown', keyPressed);
  document.addEventListener('keyup', keyReleased);
}

function updateMousePos(evt) {
  const rect = canvas.getBoundingClientRect();
  const root = document.documentElement;

  mouseX = evt.clientX - rect.left - root.scrollLeft;
  mouseY = evt.clientY - rect.top - root.scrollTop;
}
