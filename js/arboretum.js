function setup() {
  let div = createDiv('').id('hello-container');
  div.html('<uL><li><img src="assets/favicons/logo-invert.png"></li><li><h2>Nate Hill</h2></li><li><a href="sculpture.html">Sculpture</a></li><li><a href="lithops.html">Lithops</a></li><li><a href="painting.html">Painting</a></li><li><a href="projects.html">Other Projects</a></li><li><a href="work.html">Work</a></li></uL><ul><li><a href="https://www.instagram.com/natehillnatehill/?hl=en" target="blank">Instagram</a></li><li>nathanielhill at gmail</li></ul>');
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.id("arboretum");
  translate(width / 2, height / 6);
  resetSketch();
}

function resetSketch(){
  let turtleString = "B";  
  for(let i = 0; i < 9; i++){
    turtleString = turtleString.replaceAll("B", "F[+B][-B]-B-B");
  }
  background(219, 252, 207);
  stroke('black');  
  renderString(turtleString);
}


let branchLength = 80;
let angle = Math.PI / 4;


function renderString(string) {
  for (let character of string) {
    if (character == 'F') {
      strokeWeight(branchLength / 60);
      let customRandom = random(-50, 50);
      fill(202, 247, 186);
      bezier(0, 0, 30, -30, 0, 0, 0, -branchLength);
      translate(0, -branchLength);
    } else if (character == '+') {
      rotate(random(0, 1));
    } else if (character == '-') {
      rotate(random(-1, 0));
    } else if (character == '[') {
      branchLength /=1.4;
      push();
    } else if (character == ']') {
      branchLength *=1.4;
      pop();
    }
  }
}
