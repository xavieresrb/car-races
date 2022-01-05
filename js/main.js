const FRAMES_PER_SECOND = 30;

let canvas, canvasContext;

window.onload = function () {
  canvas = document.getElementById('gameCanvas');
  canvasContext = canvas.getContext('2d');

  loadImages();
};

function launchGame() {
  setInterval(updateAll, 1000 / FRAMES_PER_SECOND);

  setupInput();

  carReset();
}

function moveAll() {
  carMove();
  carTrackHandler();
}

function logData() {
  const mouseTrackCol = Math.floor(mouseX / TRACK_W);
  const mouseTrackRow = Math.floor(mouseY / TRACK_H);
  const index = colRowToIndex(mouseTrackCol, mouseTrackRow);
  colorText(
    `i=${index};b=${mouseTrackCol},${mouseTrackRow};c=${mouseX},${mouseY}`,
    mouseX,
    mouseY,
    'yellow'
  );
}

function drawAll() {
  drawTracks();
  drawCar();
  logData();
}

function updateAll() {
  moveAll();
  drawAll();
}
