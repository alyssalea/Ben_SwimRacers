var x = 0;
var skull
function preload() {
 skull = loadImage("assets/zeskul.png")
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background(80, 0, 0)
  x = x + 0.9;
  if (x > width) {
    x = 0;
  }
  image(skull, 10, 10, x, x);
}

function mousePressed() {
  noLoop();
}

function mouseReleased() {
  loop();
}

function windowResized() {
resizeCanvas(windowWidth, windowHeight)
}
