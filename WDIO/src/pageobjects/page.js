const { MainMenu } = require("./components");
const { BoardCreateWindow } = require("./components");

module.exports = class Page {
  constructor() {
    this.mainMenu = new MainMenu();
    this.boardCreate = new BoardCreateWindow(
      '[data-testid="header-create-menu-popover"]'
    );
    this.boardCreateWorkspace = new BoardCreateWindow('[data-elevation="1"]');
  }
  get isPageLoaded() {
    return $("[data-loading='false']");
  }
  open(path) {
    return browser.url(`https://trello.com/${path}`);
  }
};
