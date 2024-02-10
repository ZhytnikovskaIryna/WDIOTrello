const { MainMenu } = require("./components");
const { BoardCreateWindow } = require("./components");

module.exports = class Page {
  constructor() {
    this.mainMenu = new MainMenu();
    this.boardCreate = new BoardCreateWindow();
  }
  get isPageLoaded() {
    return $("[data-loading='false']");
  }
  open(path) {
    return browser.url(`https://trello.com/${path}`);
  }
};
