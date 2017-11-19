function setup() {
  createCanvas(600, 400).position(700, 100);
}

let infoey = '';

function draw() {
  background(255);
  fill(0);
  textSize(24);
  text(infoey, 10, 30, 600, 400);
}

function showInfo(type) {
  if (type === 'nucleus') {
    infoey = 'Nucleus - This organelle communicates with surrounding cytosol and contains the DNA responsible for providing the cell with its characteristics.'
  } else if (type === 'nucleolus') {
    infoey = 'Nucleolus - This organelle produces ribosomes is a prominent structure.';
  } else if (type === 'ribosomes') {
    infoey = 'ribosomes-Packets of RNA and protein that are critical in protein synthesis. It also structurally has a large subunit and a small subunit.';
  } else if (type === 'rough-er') {
    infoey = 'rough endoplasmic reticulum-Similar to a smooth endoplasmic reticulum, but appears pebbled by electron microscopy. The ribosomes on its surface and proteins on these ribosomes collect for transport.';
  } else if (type === 'smooth-er') {
    infoey = 'smooth endoplasmic reticulum-A vast network of membrane-bound vesicles that appear smooth by electron microscopy. Plays a role in lipid and steroid hormone synthesis and others depending on the cell.';
  } else if (type === 'golgi') {
    infoey = 'Golgi apparatus-A membrane-bound structure with a single membrane that packages macromolecules for transport.'
  } else if (type === 'vacuole') {
    infoey = 'vacuole-A membrane-bound sac which plays a role in intracellular digestion and release of cellular waste products.';
  } else if (type === 'lysosome') {
    infoey = 'lysosome-This contains hydrolytic enzymes for intracellular digestion.';
  } else if (type === 'mito') {
    infoey = 'mitochondria-Provides energy for cell and is the size of bacteria. It might have different shapes depending on the cell.';
  } else if (type === 'memb') {
    infoey = 'cell membrane-A double layer of phospholipids with exposed heads that are water loving and hidden tails that are water fearing.';
  } else if (type === 'cyto') {
    infoey = 'cytoplasm-The soup where organelles reside. This is mostly water, but full of proteins that control cell metabolism.';
  }
}