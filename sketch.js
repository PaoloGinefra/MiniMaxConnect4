let game;
let rederer;

function setup() {
  createCanvas(windowWidth, windowHeight);
  game = new Game(6, 7);
  console.log(game.state.board);
  renderer = new Renderer(this);
}

function draw() {
  renderer.renderGame(game);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
