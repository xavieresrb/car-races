const carPic = document.createElement('img');
const roadPic = document.createElement('img');
const wallPic = document.createElement('img');
const goalPic = document.createElement('img');
const treePic = document.createElement('img');
const flagPic = document.createElement('img');

const IMAGES_FOLDER = 'images';
const IMAGES_LIST = [
  {
    varName: carPic,
    fileName: 'player1car.png',
  },
  {
    varName: roadPic,
    fileName: 'track_road.png',
  },
  {
    varName: wallPic,
    fileName: 'track_wall.png',
  },
  {
    varName: goalPic,
    fileName: 'track_goal.png',
  },
  {
    varName: treePic,
    fileName: 'track_tree.png',
  },
  {
    varName: flagPic,
    fileName: 'track_flag.png',
  },
];

function loadImages() {
  let picsToLoad = IMAGES_LIST.length;

  function loadImageHandler() {
    picsToLoad--;

    if (picsToLoad === 0) {
      launchGame();
    }
  }

  function setImage(image, fileName) {
    image.onload = loadImageHandler;
    image.src = `${IMAGES_FOLDER}/${fileName}`;
  }

  IMAGES_LIST.forEach((img) => setImage(img.varName, img.fileName));
}
