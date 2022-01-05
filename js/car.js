const CAR_SIZE = 14;
const CAR_RADIUS = CAR_SIZE / 2;
const GROUND_SPEED_DECAY_MULT = 0.95;
const DRIVE_POWER = 0.5;
const REVERSE_POWER = 0.2;
const TURN_RATE = 0.06;
const MIN_SPEED_TO_TURN = 0.5;

let carX = 175;
let carY = 175;
let carAngle = 0;
let carSpeed = 0;

function carReset() {
  for (let row = 0; row < TRACK_ROWS; row++) {
    for (let col = 0; col < TRACK_COLS; col++) {
      const index = colRowToIndex(col, row);

      if (trackGrid[index] === TRACK.PLAYER_START) {
        trackGrid[index] = TRACK.ROAD;
        carAngle = -Math.PI / 2;
        carX = col * TRACK_W + TRACK_W / 2;
        carY = row * TRACK_H + TRACK_H / 2;
      }
    }
  }
}

function carMove() {
  carSpeed *= GROUND_SPEED_DECAY_MULT;

  if (keyHeld.gas) {
    carSpeed += DRIVE_POWER;
  }
  if (keyHeld.reverse) {
    carSpeed -= REVERSE_POWER;
  }
  if (Math.abs(carSpeed) > MIN_SPEED_TO_TURN) {
    if (keyHeld.turnLeft) {
      carAngle -= TURN_RATE;
    }
    if (keyHeld.turnRight) {
      carAngle += TURN_RATE;
    }
  }

  carX = carX + Math.cos(carAngle) * carSpeed;
  carY = carY + Math.sin(carAngle) * carSpeed;
}

function drawCar() {
  drawBitMapCenteredWithRotation(carPic, carX, carY, carAngle);
}
