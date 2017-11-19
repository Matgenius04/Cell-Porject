function setup() {
  createCanvas(600, 400).position(700, 100);
}

let infoey = '';

function draw() {
  background(255);
  fill(0);
  textSize(16);
  text(infoey, 10, 30);
}

function showInfo(type) {
  if (type === 'nucleus') {
    infoey = 'Nucleus: This is the organelle that stores the genetic material for a cell.'
  } else if (type === 'nucleolus') {
    infoey = 'Nucleolus: This is the organelle that creates Ribosomes';
  } else if (type === 'ribosomes') {
    infoey = 'Ribosomes: These are the organelles that make proteins.';
  } else if (type === 'rough-er') {
    infoey = 'Rough ER: This is the organelle that holds the ribosomes.';
  } else if (type === 'smooth-er') {
    infoey = 'Smooth ER: This is the organelle that produces lipids.';
  }
}