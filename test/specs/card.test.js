const LoginPage = require("../pageobjects/login.page");
const credentials = require("../../wdio.conf");
const BoardsPage = require("../pageobjects/boards.page");
const { LIST_NAME, BOARD_NAME_CARD, CARD_NAME } = require("../support/config");

describe("Verify action on board: adding lists and cards", () => {
  beforeEach(async function () {
    await LoginPage.open();
    await LoginPage.login(
      credentials.config.userTrello,
      credentials.config.passwordTrello
    );
    await LoginPage.isPageLoaded.waitForDisplayed();
    await BoardsPage.open();
    await BoardsPage.mainMenu.createButton.click();
    await BoardsPage.mainMenu.createBoardButton.click();
    await BoardsPage.boardCreate.inputBoardTitle.setValue(BOARD_NAME_CARD);
    await BoardsPage.boardCreate.buttonCreateBoard.click();
  });

  it("Add card to existent list", async function () {
    await BoardsPage.listTitle.setValue(LIST_NAME);
    await BoardsPage.addListButton.click();
    await browser.refresh();
    await BoardsPage.addCard.click();
    await BoardsPage.cardName.setValue(CARD_NAME);
    await BoardsPage.cardCreate.click();
    await expect(BoardsPage.createdCardName).toHaveText(CARD_NAME);
  });
});
