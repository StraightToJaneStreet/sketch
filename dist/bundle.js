(function () {
    'use strict';

    class MouseState {
        constructor(pressed) {
            this.pressed = pressed;
        }
        isPressed() {
            return this.pressed;
        }
        toggleState() {
            this.pressed = !this.pressed;
        }
    }

    class Sketch {
        constructor(root) {
            this.mosueState = new MouseState(false);
            this.mosueState = new MouseState(false);
            this.rootContainer = root;
            this.createLayout();
        }
        createLayout() {
            const sketch = document.createElement('div');
            sketch.classList.add('sketch');
            this.rootContainer.append(sketch);
            const grid = this.grid = document.createElement('div');
            grid.classList.add('sketch__grid', 'grid');
            sketch.append(grid);
            const mouseTogglingCallback = this.mosueState.toggleState.bind(this.mosueState);
            grid.addEventListener('mouseup', mouseTogglingCallback);
            grid.addEventListener('mousedown', mouseTogglingCallback);
        }
        cellClickHandler(cell) {
            if (this.mosueState.isPressed()) {
                cell.classList.add('grid__cell_colored');
            }
        }
        configureGrid({ rows, columns }) {
            if (!this.grid) {
                throw Error("Grid is not configured");
            }
            const createCellCallback = (cell) => () => {
                this.cellClickHandler(cell);
            };
            const createCell = () => {
                const cell = document.createElement('div');
                cell.classList.add('grid__cell');
                const callback = createCellCallback(cell);
                cell.addEventListener('mousedown', callback);
                cell.addEventListener('mousemove', callback);
                return cell;
            };
            const cells = [...Array(rows * columns).keys()].map(createCell);
            this.grid.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
            this.grid.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
            this.grid.append(...cells);
        }
    }

    const SKETCH_DEFAULT_GRID_ROWS = 16;
    const SKETCH_DEFAULT_GRID_COLUMNS = 16;
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

})();
//# sourceMappingURL=bundle.js.map
