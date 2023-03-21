// original awesome code here, much thanks https://editor.p5js.org/dcbriccetti/sketches/B27BquhuE
// image source https://www.flickr.com/photos/34053291@N05/6145158455
function setup() {
  cnv = createCanvas(1020, 775, WEBGL);
  cnv.id('monumentCanvas');
  for (let i = -8; i <= 8; ++i) {
    for (let j = -3; j <= 3; ++j) {
      for (let k = -3; k <= 3; ++k) {
        let x = i * 38;
        let y = j * 38;
        let z = k * 38;
        push();
        translate(x, y, z);
        stroke(100, 100, 100, 60);
        fill('white');
        box(30);
        pop();
      }
    }
  }
}

function draw() {
  background(bg);
}
