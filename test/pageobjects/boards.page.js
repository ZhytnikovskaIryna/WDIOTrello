const Page = require("./page");

class BoardsPage extends Page {
  get boardName() {
    return $("[data-testid='board-name-display']");
  }

  get memberAvatar() {
    return $("[data-testid='header-member-menu-avatar']");
  }

  get listTitle() {
    return $("textarea[name='Enter list title…']");
  }

  get addListButton() {
    return $("[data-testid='list-composer-add-list-button']");
  }

  get listName() {
    return $("[data-testid='list-name']");
  }

  get addCard() {
    return $("[data-testid='list-add-card-button']");
  }

  get cardName() {
    return $("[data-testid='list-card-composer-textarea']");
  }

  get cardCreate() {
    return $("[data-testid='list-card-composer-add-card-button']");
  }

  get createdCardName() {
    return $("[data-testid='card-name']");
  }

  open() {
    return super.open("u/testinguser409/boards");
  }
}
module.exports = new BoardsPage();
