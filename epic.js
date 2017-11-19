function setup() {
  createCanvas(600, 400).position(700, 100);
}

let infoey = '';

function draw() {
  background(255);
  fill(0);
  textSize(16);
  text(infoey, 10, 30, 600, 400);
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
  } else if (type === 'golgi') {
    infoey = 'Golgi Body: This is the organelle that assembles proteins, lipids, and other chemicals to make useful stuff and transport it throughout the cell.'
  } else if (type === 'vacuole') {
    infoey = 'Vacuole: This is the organelle that stores water and cell food.';
  } else if (type === 'lysosome') {
    infoey = 'Lysosomes: This is the organelle that disposes of broken cell parts or turns them into cell food.';
  } else if (type === 'mito') {
    infoey = 'Mitochondria: This is the organelle that turns cell food into energy.';
  } else if (type === 'memb') {
    infoey = 'Cell Membrane: This is the organelle that holds all the organelles inside the cell.'
  }
}