function setup() {
  createCanvas(800,800);
  background('white');
  
  let turtleString = "B";  
  for(let i = 0; i < 9; i++){
    turtleString = turtleString.replaceAll("B", "F[+B][-B]-B-B");
  }
  
  stroke('black');
  translate(width / 2, height / 2);
  renderString(turtleString);
}

let branchLength = 30;
let angle = Math.PI / 4;


function renderString(string) {
  for (let character of string) {
    if (character == 'F') {
      strokeWeight(branchLength / 60);
      let customRandom = random(-50, 50);
      bezier(0, 0, 30, -30, 0, 0, 0, -branchLength);
      //line(0, 0, 0, -branchLength);
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
