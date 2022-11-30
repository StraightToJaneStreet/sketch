import { ICell } from "./ICell";

export interface ITool {
  apply(cell: ICell): void;
}
