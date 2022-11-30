class MouseState {
  private pressed: boolean;

  constructor(pressed: boolean) {
    this.pressed = pressed;
  }

  isPressed() {
    return this.pressed;
  }

  toggleState() {
    this.pressed = !this.pressed;
  }
}

export default MouseState;
