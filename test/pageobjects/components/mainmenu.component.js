const BaseComponent = require("./base.component");
class MainMenuComponent extends BaseComponent {
  constructor() {
    super("body");
  }
  //   menuItem(param){
  //        const selectors = {
  //            searchInput : "[data-testid='cross-product-search-input-skeleton']",
  //            searchResult: "[data-testid='trello-hover-preview-popper-container'] span",
  //            createButton: "[data-testid='header-create-menu-button']",
  //            createBoardButton: "[data-testid='header-create-board-button']",

  //        };
  //        return this.rootEl.$(selectors[param]);
  //    }
  get searchInput() {
    return this.rootEl.$("[data-testid='cross-product-search-input-skeleton']");
  }
  get searchResult() {
    return this.rootEl.$(
      "[data-testid='trello-hover-preview-popper-container'] span"
    );
  }
  get createButton() {
    return this.rootEl.$("[data-testid='header-create-menu-button']");
  }
  get createBoardButton() {
    return this.rootEl.$("[data-testid='header-create-board-button']");
  }
}

module.exports = MainMenuComponent;
