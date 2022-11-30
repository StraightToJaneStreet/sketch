import Sketch from './Sketch';

const SKETCH_DEFAULT_GRID_ROWS: number = 16;
const SKETCH_DEFAULT_GRID_COLUMNS: number = 16;

function initializeSketch() {
  const root = document.getElementById("sketch-root");
  if (!root) {
    throw Error("Cant find sketch root");
  }

  const sketch = new Sketch(root);

  sketch.configureGrid({
    rows: SKETCH_DEFAULT_GRID_ROWS,
    columns: SKETCH_DEFAULT_GRID_COLUMNS
  });
}

document.addEventListener("DOMContentLoaded", initializeSketch);
