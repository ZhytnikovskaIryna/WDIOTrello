const LoginPage = require("../pageobjects/login.page");
const credentials = require("../../wdio.conf");
const BoardsPage = require("../pageobjects/boards.page");
const WorkspacePage = require("../pageobjects/workspace.page");
const { BOARD_NAME_WORKSPACE, BOARD_NAME_MENU } = require("../support/config");

describe("Verify adding new boards", () => {
  beforeEach(async function () {
    await LoginPage.open();
    await LoginPage.login(
      credentials.config.userTrello,
      credentials.config.passwordTrello
    );
    await LoginPage.isPageLoaded.waitForDisplayed();
  });

  it("Add new board from Workspace page", async function () {
    await WorkspacePage.open();
    await WorkspacePage.addBoard.click();
    await WorkspacePage.boardCreate.inputBoardTitle.setValue(
      BOARD_NAME_WORKSPACE
    );
    await WorkspacePage.boardCreate.buttonCreateBoard.click();
    await expect(BoardsPage.boardName).toHaveText(BOARD_NAME_WORKSPACE);
  });

  it(" Add new board from my main menu when you are at boards page", async function () {
    await BoardsPage.open();
    await BoardsPage.mainMenu.createButton.click();
    await BoardsPage.mainMenu.createBoardButton.click();
    await BoardsPage.boardCreate.inputBoardTitle.setValue(BOARD_NAME_MENU);
    await BoardsPage.boardCreate.buttonCreateBoard.click();
    await expect(BoardsPage.boardName).toHaveText(BOARD_NAME_MENU);
  });
});
