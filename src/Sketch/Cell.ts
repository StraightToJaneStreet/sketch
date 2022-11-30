import Color from "./Color";
import { ICell } from "./ICell";

export default class Cell implements ICell {
  private ref: HTMLElement;

  constructor(ref: HTMLElement) {
    this.ref = ref;
  }

  public paint(color: Color) {
    this.ref.style.backgroundColor = color;
  }

  public clear() {
    this.ref.style.backgroundColor = '';
  }

  public getRef(): HTMLElement {
    return this.ref;
  }
}
