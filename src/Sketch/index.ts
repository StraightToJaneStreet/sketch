import MouseState from './MouseState';

export interface GridSize {
  columns: number;
  rows: number;
}

class Sketch {
  private rootContainer : HTMLElement;
  private grid?: HTMLElement;

  private mosueState: MouseState = new MouseState(false);

  constructor(root: HTMLElement) {
    this.mosueState = new MouseState(false);
    this.rootContainer = root;
    this.createLayout();
  }

  private createLayout() {
    const sketch = document.createElement('div');
    sketch.classList.add('sketch');
    this.rootContainer.append(sketch);

    const grid = this.grid = document.createElement('div');
    grid.classList.add('sketch__grid', 'grid');
    sketch.append(grid);

    const mouseTogglingCallback = this.mosueState.toggleState.bind(this.mosueState)
    grid.addEventListener('mouseup', mouseTogglingCallback);
    grid.addEventListener('mousedown', mouseTogglingCallback);
  }

  private cellClickHandler(cell: HTMLElement) {
    if (this.mosueState.isPressed()) {
      cell.classList.add('grid__cell_colored');
    }
  }

  public configureGrid({ rows, columns }: GridSize) {
    if (!this.grid) {
      throw Error("Grid is not configured");
    }

    const createCellCallback = (cell: HTMLElement) => () => {
      this.cellClickHandler(cell);
    }

    const createCell = () => {
      const cell = document.createElement('div');
      cell.classList.add('grid__cell');

      const callback = createCellCallback(cell);
      cell.addEventListener('mousedown', callback);
      cell.addEventListener('mousemove', callback);

      return cell;
    }

    const cells = [...Array(rows * columns).keys()].map(createCell);

    this.grid.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    this.grid.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

    this.grid.append(...cells);
  }
}

export default Sketch;
