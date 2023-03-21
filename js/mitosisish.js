//almost all code here borrowed from stayradforever
const numberOfSeeds = 13;
const c = 4;
var f = 0;

function setup() {
  createCanvas(900, 900);
  angleMode(DEGREES);

}

function angleForI(i) {
  return i * 137.5;
}

function radiusForI(i){
 return c * sqrt(i);
}

function drawSeed(i) {
  const t = (sin(frameCount) + 1) / 5;
  const r = radiusForI(i);
  const a = angleForI(i);

  const x1 = (r + 200) * cos(a) + width / 2;
  const y1 = (r + 200) * sin(a) + height / 2;

  //this one is the moving point. r is moving the point different distances.
  const x2 = (r + 1000 * t * i / numberOfSeeds) * cos(a + 25 * t) + width / 2;
  const y2 = (r + 1000 * t * i / numberOfSeeds) * sin(a + 25 * t) + height / 2;

  const x3 = (r + 200 * t) * cos(a + 50) + width / 2;
  const y3 = (r + 200 * t) * sin(a + 50) + height / 2;

  const x4 = cos(a) * cos(a + 25 * t) + width / 2;
  const y4 = sin(a) * sin(a + 25 * t) + height / 2;

  const x5 = (r + 900 * t) * cos(a + 50) + width / 2;
  const y5 = (r + 900 * t) * sin(a + 50) + height / 2;

  const x6 = cos(a) * cos(a + 25 * t) + width / 6;
  const y6 = sin(a) * sin(a + 25 * t) + height / 6;


  noStroke()
  fill(255, 102, 0);
  bezier(x1, y1, x2, y2, x3, y3, x4, y4);
  fill(0, 102, 0);
  ellipse(x5, y5, x6, y6);
}


function draw() {
  clear()
background('rgb(153, 221, 255)');
  for (let i = 0; i < numberOfSeeds; i++) {
    drawSeed(numberOfSeeds - i);
  }
}

function keyPressed() {

  if (key === ' ') {
    saveGif('mitosis-ish.gif', 10);
    saved = true
  }
}
