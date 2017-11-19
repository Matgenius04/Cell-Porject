function setup() {
  createCanvas(600, 400).position(700, 100);
}

let infoey = '';

function draw() {
  background(255);
  fill(0);
  text(infoey, 10, 10);
}

function showInfo(type) {
  if (type === 'nucleus') {
    infoey = 'Nucleus: This is the organelle that stores the genetic material for a cell.'
  } else if (type === 'nucleolus') {
    infoey = 'Nucleolus: this is the organelle that creates Ribosomes';
  }
}