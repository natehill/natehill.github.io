let branchLength = 310;
let angle = Math.PI / 4;
let angleTwo = angle * 2;

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight;
  cnv.id('circinate');
}

function draw(){
  angle += 0.01;
  background('white');
  stroke('black');
  strokeWeight(1);
  //translate(windowWidth / 2, windowHeight);
  push();
  
  let turtleString = "B";
  for (let i = 0; i < 10; i++) {
    turtleString = turtleString.replaceAll("B", "F[-B][+B]");   
  }

  //print(turtleString);
  renderString(turtleString);
  pop();
}


function renderString(string) {
  for (let character of string) {
    if (character == 'F') {
      strokeWeight(branchLength / 10);
      line(0, 0, 0, -branchLength);
      translate(0, -branchLength);
    } else if (character == '+') {
      rotate(angle * 2);
    } else if (character == '-') {
      rotate(-angle);
    } else if (character == '[') {
      branchLength /= 1.5;
      push();
    } else if (character == ']') {
      branchLength *= 1.5;
      pop();
    }
  }
}
