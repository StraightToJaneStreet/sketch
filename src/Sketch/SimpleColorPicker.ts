import Color, { HEX as HEXColor } from "./Color";
import { IColorContainer } from "./IColorContainer";

class SimpleColorPicker implements IColorContainer {
  private element: HTMLInputElement;
  private color?: HEXColor;

  constructor() {
    this.element = this.createElement();
  }

  public getColor(): Color {
    return this.element.value;
  }

  public getElement(): HTMLElement {
    return this.element;
  }

  private createElement(): HTMLInputElement {
    const element = document.createElement('input') as HTMLInputElement;
    element.setAttribute('type', 'color');
    element.classList.add('colorpicker');

    return element;
  }
}
