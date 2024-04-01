import { Page } from "./page.js";


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
    return browser.url("/u/testinguser409/boards");
  }

  async createBoard(boardName:string) {
    await this.open();
    await this.mainMenu.createButton.click();
    await this.mainMenu.createBoardButton.click();
    await this.boardCreate.inputBoardTitle.setValue(boardName);
    await this.boardCreate.buttonCreateBoard.click();
  }

  async createList(listName: string) {
    await this.listTitle.setValue(listName);
    await this.addListButton.click();
  }

  async createCard(cardName:string) {
    await this.addCard.click();
    await this.cardName.setValue(cardName);
    await this.cardCreate.click();
  }
}
export default new BoardsPage();
