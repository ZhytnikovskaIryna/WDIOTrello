const BaseComponent = require("./base.component");
class BoardCreateComponent extends BaseComponent {
  constructor(selector) {
    super(selector);
  }
  get inputBoardTitle() {
    return this.rootEl.$("[data-testid='create-board-title-input']");
  }

  get buttonCreateBoard() {
    return this.rootEl.$("button[data-testid='create-board-submit-button']");
  }
}

module.exports = BoardCreateComponent;
