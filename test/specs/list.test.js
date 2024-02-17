const LoginPage = require("../pageobjects/login.page");
const credentials = require("../../wdio.conf");
const BoardsPage = require("../pageobjects/boards.page");
const { LIST_NAME, BOARD_NAME_LIST } = require("../support/config");
const expect = require("chai").expect;

describe("Verify action on board: adding lists", () => {
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
    await BoardsPage.boardCreate.inputBoardTitle.setValue(BOARD_NAME_LIST);
    await BoardsPage.boardCreate.buttonCreateBoard.click();
  });

  it("Add list to existent board", async function () {
    await BoardsPage.listTitle.setValue(LIST_NAME);
    await BoardsPage.addListButton.click();
    const listName = await BoardsPage.listName.getText();
    const listTitleDisplayed = await BoardsPage.listTitle.isDisplayed();
    expect(listTitleDisplayed).to.be.true;
    expect(listName).to.be.equal(LIST_NAME);
  });
});
