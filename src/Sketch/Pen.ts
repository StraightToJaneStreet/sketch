import Color from "./Color";
import { ICell } from "./ICell";
import { ITool } from "./ITool";

const DEFAULT_PEN_COLOR: Color = '#000000';

class Pen implements ITool {
  private color: Color = DEFAULT_PEN_COLOR;

  apply(cell: ICell): void {
    cell.paint(DEFAULT_PEN_COLOR);
  }
}
