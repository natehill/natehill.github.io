let cells = [];
const cellSize = 2;
let currentRow = 0;

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  cnv.id('ca');
  background('black');
  
  const numCells = width / cellSize;
  for (let i = 0; i < numCells; i++) {
    cells[i] = 0;
  }
  cells[round(numCells / 2)] = 1;
  cells[round(numCells / 2) -2] = 1;
  //cells[round(numCells / 2) + 1] = 1;
  cells[round(numCells / 2) + 3] = 1;
}

function draw() {
  fill('white');
  noStroke();
  
  translate(0, currentRow * cellSize);
  currentRow++;
  for (let i = 0; i < cells.length; i++) {
    if (cells[i] == 0) {
      fill('black');
      } else if (cells[i] == 2){
      fill('pink');
      }  else if (cells[i] == 3){
      fill('green');
    } else {
      fill('white');
    }
    rect(i * cellSize, 0, cellSize, cellSize);
  }
  
  let newCells = [];
  for (let i = 0; i < cells.length; i++) {
    const leftleft = cells[i - 2] ?? 0;
    const left = cells[i - 1];
    const middle = cells[i];
    const right = cells[i + 1];
    const right2 = cells[i + 2];
    const right3 = cells[i + 3] ?? 0
    const sum = leftleft + middle + right + right2 + right3;
    if (sum == 1) {
      newCells[i] = 1;
    } else if ( sum == 2) {
      newCells[i] = 2;
    } else if ( sum == 3) {
      newCells[i] = 3;
    } else {
      newCells[i] = 0;
    }
  }
  cells = newCells;
}
