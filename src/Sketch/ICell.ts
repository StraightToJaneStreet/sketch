import Color from "./Color";

export interface ICell {
  getRef(): HTMLElement;
  paint(color: Color): void;
  clear(): void;
}
