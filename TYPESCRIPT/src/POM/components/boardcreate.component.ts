import { BaseComponent } from "./base.component.js";
export class BoardCreateComponent extends BaseComponent {
  constructor(selector: string) {
    super(selector);
  }
  get inputBoardTitle() {
    return this.rootEl.$("[data-testid='create-board-title-input']");
  }

  get buttonCreateBoard() {
    return this.rootEl.$("button[data-testid='create-board-submit-button']");
  }
}
