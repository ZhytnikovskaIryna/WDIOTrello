const BaseComponent = require("./base.component");
class BoardCreateComponent extends BaseComponent {
  constructor() {
    super("body");
  }
  //    boardCreateWindow(param){
  //        const selectors = {
  //            inputBoardTitle: "[data-testid='create-board-title-input']",
  //            buttonCreateBoard: "button[data-testid='create-board-submit-button']",
  //        }
  //        return this.rootEl.$(selectors[param]);
  //    }
  get inputBoardTitle() {
    return this.rootEl.$("[data-testid='create-board-title-input']");
  }

  get buttonCreateBoard() {
    return this.rootEl.$("button[data-testid='create-board-submit-button']");
  }
  //   get name(){
  //       return this.rootEl.$('#user-name');
  //
}

module.exports = BoardCreateComponent;
