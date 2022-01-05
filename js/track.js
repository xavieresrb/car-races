const TRACK_W = 40;
const TRACK_H = 40;
const TRACK_COLS = 20;
const TRACK_ROWS = 15;
const TRACK_GAP = 2;

const TRACK = {
  ROAD: 0,
  WALL: 1,
  PLAYER_START: 2,
  GOAL: 3,
  TREE: 4,
  FLAG: 5,
};

const TRACK_TO_IMAGE = {
  [TRACK.ROAD]: roadPic,
  [TRACK.WALL]: wallPic,
  [TRACK.GOAL]: goalPic,
  [TRACK.TREE]: treePic,
  [TRACK.FLAG]: flagPic,
};

// prettier-ignore
const trackGrid = [
        4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4,
        4, 4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
        4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1,
        1, 0, 0, 0, 1, 1, 1, 1, 4, 4, 4, 1, 1, 1, 1, 1, 1, 0, 0, 1,
        1, 0, 0, 1, 1, 0, 0, 1, 1, 4, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1,
        1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1,
        1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1,
        1, 0, 0, 1, 0, 0, 5, 0, 0, 0, 1, 0, 0, 5, 0, 0, 1, 0, 0, 1,
        1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 5, 0, 0, 1, 0, 0, 1, 0, 0, 1,
        1, 0, 2, 5, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 5, 0, 0, 1,
        1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1,
        0, 3, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1,
        0, 3, 0, 0, 0, 0, 1, 4, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1,
        4, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 4
      ];

function colRowToIndex(col, row) {
  return TRACK_COLS * row + col;
}

function posXToCol(posX) {
  return Math.floor(posX / TRACK_W);
}

function posYToRow(posY) {
  return Math.floor(posY / TRACK_H);
}

function isObstacleAtColRow(col, row) {
  if (col >= 0 && col < TRACK_COLS && row >= 0 && row < TRACK_ROWS) {
    const trackIndex = colRowToIndex(col, row);

    return trackGrid[trackIndex] !== TRACK.ROAD;
  }
  return false;
}

function carTrackHandler() {
  const carTrackCol = posXToCol(carX);
  const carTrackRow = posYToRow(carY);

  if (
    carTrackCol >= 0 &&
    carTrackCol < TRACK_COLS &&
    carTrackRow >= 0 &&
    carTrackRow < TRACK_ROWS
  ) {
    if (isObstacleAtColRow(carTrackCol, carTrackRow)) {
      carSpeed *= -0.5;
    }
  }
}

function drawTracks() {
  for (let row = 0; row < TRACK_ROWS; row++) {
    for (let col = 0; col < TRACK_COLS; col++) {
      const index = colRowToIndex(col, row);
      const tileType = trackGrid[index];
      const imgCandidate = TRACK_TO_IMAGE[tileType];

      if (imgCandidate) {
        canvasContext.drawImage(imgCandidate, TRACK_W * col, TRACK_H * row);
      }
    }
  }
}
