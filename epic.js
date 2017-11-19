function setup() {
  createCanvas(600, 400).position(700, 100);
}

let text;

function draw() {
  background(255);
  text(text)
}

function showInfo(type) {
  if (type === 'nucleus') {
    text = 'Nucleus: This is the organelle that stores the genetic material for a cell.'
  }
}