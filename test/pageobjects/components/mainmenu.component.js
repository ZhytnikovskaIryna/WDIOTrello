const BaseComponent = require("./base.component");
class MainMenuComponent extends BaseComponent {
  constructor() {
    super("body");
  }

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
