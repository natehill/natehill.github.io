let leafArray = []
let leafSize = 4.5
let branchTimes = 8
let branchLength = 35
let angle = Math.PI / 4

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.id("creepybranches");
  stroke(color(94, 64, 41));
  translate(width / 2, height +550);
  background(color(42, 73, 247));  
  push();
  
  let turtleString = "B";
  for(let i = 0; i < branchTimes; i++){
    if (i < (branchTimes - 1)) {
    turtleString = turtleString.replaceAll("B", "F[++B][--B]-B+B-B+B"); 
  } else {
     turtleString = turtleString.replaceAll("--B","O")
    }
    for (let character of turtleString) {
      leafArray.push(leafSize)
    }
  }

  renderString(turtleString);
  
}


function renderString(string) {
  let arrayCounter = 0
  for (let character of string) {
    if (character == 'F') {
      strokeWeight(branchLength / 3);
      noFill();
      //bezier(0, 0, 10, -10, 0, 0, 0, -branchLength);
      line(0, 0, 0, -branchLength);
      translate(0, -branchLength);
    } else if (character == '+') {
      rotate(angle * random());
    } else if (character == '-') {
      rotate(-angle * random());
    } else if (character == '[') {
      branchLength /= 1.5;
      push();
    } else if (character == ']') {
      branchLength *= 1.5;    
      pop();
    } else if (character == 'O') {
      colorMode(RGB)
      strokeWeight(.1);
        fill(color('red'))
        circle(0,0,leafArray[arrayCounter])
      }
    }
  }

