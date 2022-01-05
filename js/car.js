const CAR_SIZE = 14;
const CAR_RADIUS = CAR_SIZE / 2;
const GROUND_SPEED_DECAY_MULT = 0.95;
const DRIVE_POWER = 0.5;
const REVERSE_POWER = 0.2;
const TURN_RATE = 0.06;
const MIN_SPEED_TO_TURN = 0.5;

function carClass() {
  this.x = 175;
  this.y = 175;
  this.angle = 0;
  this.speed = 0;
  this.image;

  this.reset = function (image) {
    this.image = image;
    for (let row = 0; row < TRACK_ROWS; row++) {
      for (let col = 0; col < TRACK_COLS; col++) {
        const index = colRowToIndex(col, row);

        if (trackGrid[index] === TRACK.PLAYER_START) {
          trackGrid[index] = TRACK.ROAD;
          this.angle = -Math.PI / 2;
          this.x = col * TRACK_W + TRACK_W / 2;
          this.y = row * TRACK_H + TRACK_H / 2;
          return;
        }
      }
    }
  };

  this.move = function () {
    this.speed *= GROUND_SPEED_DECAY_MULT;

    if (keyHeld.gas) {
      this.speed += DRIVE_POWER;
    }
    if (keyHeld.reverse) {
      this.speed -= REVERSE_POWER;
    }
    if (Math.abs(this.speed) > MIN_SPEED_TO_TURN) {
      if (keyHeld.turnLeft) {
        this.angle -= TURN_RATE;
      }
      if (keyHeld.turnRight) {
        this.angle += TURN_RATE;
      }
    }

    this.x = this.x + Math.cos(this.angle) * this.speed;
    this.y = this.y + Math.sin(this.angle) * this.speed;

    carTrackHandler(this);
  };

  this.draw = function () {
    drawBitMapCenteredWithRotation(this.image, this.x, this.y, this.angle);
  };
}
