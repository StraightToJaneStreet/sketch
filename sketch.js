const SKETCH_DEFAULT_GRID_ROWS = 16;
const SKETCH_DEFAULT_GRID_COLUMNS = 16;

class Sketch {
  #rootContainer;
  #sketch;
  #grid;

  #mousePressed = 0;

  constructor(root) {
    this.#rootContainer = root;
    this.#createLayout();
  }

  #createLayout() {
    const sketch = this.#sketch = document.createElement('div');
    sketch.classList.add('sketch');
    this.#rootContainer.append(sketch);

    const grid = this.#grid = document.createElement('div');
    grid.classList.add('sketch__grid', 'grid');
    sketch.append(grid);

    grid.addEventListener('mouseup', () => {
      this.#mousePressed = 0;
    });

    grid.addEventListener('mousedown', () => {
      this.#mousePressed = 1;
    })
  }

  #cellClickHandler(cell) {
    if (this.#mousePressed) {
      cell.classList.add('grid__cell_colored');
    }
  }

  configureGrid({ rows, columns }) {
    const createCellCallback = (cell) => () => {
      this.#cellClickHandler(cell);
    }

    const createCell = () => {
      const cell = document.createElement('div');
      cell.classList.add('grid__cell');
      const callback = createCellCallback(cell);

      cell.addEventListener('mouseover', callback);
      cell.addEventListener('mouseup', callback);
      cell.addEventListener('mousedown', callback);
      cell.addEventListener('mousemove', callback);

      return cell;
    }

    const cells = [...Array(rows * columns).keys()].map(createCell);

    this.#grid.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    this.#grid.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

    this.#grid.append(...cells);
  }
}

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
