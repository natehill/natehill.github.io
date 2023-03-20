function setup() {
  createCanvas(1000, 1000);
  background('white');
  
  let turtleString = "B";
  for (let i = 0; i < 7; i++) {
    turtleString = turtleString.replaceAll("B", "F[++B][--B]-B+BFF");
  }
  
  translate(windowWidth / 2 , windowHeight );
  renderString(turtleString);
}

let branchLength = 30;
let angle = Math.PI / 12;

function renderString(string) {
  for (let character of string) {
    if (character == 'F') {
      
      fill('white');
      strokeWeight(branchLength / 30);
      bezier(  40, 42, 8, 54, 30, 10, 0, 0);
      bezier(  42, 40, 54, 8, 10, 30, 0, 0);
      translate(0, -branchLength);
    } else if (character == '+') {
      rotate(angle * random());
    } else if (character == '-') {
      rotate(-angle * random());
    } else if (character == '[') {
      branchLength /= 1.3;
      push();
    } else if (character == ']') {
      branchLength *= 1.3;
      pop();
    }
  }
}
