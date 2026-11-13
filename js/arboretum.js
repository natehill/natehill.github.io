function setup() {
  let div = createDiv('').id('hello-container');
  div.html('<uL><li><h2>Nate Hill</h2></li><li><a href="sculpture.html">Sculpture</a></li><ul><li>The Loop Trail, installation</li><li>Lithops</li><li>Boxes / Dwellings</li></ul><li><a href="painting.html">Wall pieces</a></li><ul><li>one</li><li>two</li><li>three</li></ul><li><a href="work.html">CV</a></li><li><a href="work.html">Statement</a></li><li><a href="projects.html">Miscellany</a></li></uL><ul><li><a href="https://www.instagram.com/natehillnatehill/?hl=en" target="blank">Instagram</a></li><li>nathanielhill at gmail</li></ul>');
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
