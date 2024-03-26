import { Given, When, Then } from "@wdio/cucumber-framework";
import LoginPage from "../POM/login.page.js";
import BoardsPage from "../POM/boards.page.js";
import { constants } from "../configs/test-data.js";
import { config } from "../configs/wdio.conf.js";

Given(/^I’m logged in and currently at boards page$/, async () => {
  await LoginPage.login(config.userTrello, config.passwordTrello);
  await LoginPage.isPageLoaded.waitForDisplayed();
});

When(
  /^I create new board with (\w+) name from the boards page$/,
  async (boardName) => {
    await BoardsPage.createBoard(boardName);
  }
);

When(/^I type Board name in Search field$/, async () => {
  await BoardsPage.mainMenu.searchInput.setValue(constants.BOARD_INITIAL);
});

Then(/^I see the Board in Search results$/, async () => {
  await BoardsPage.mainMenu.searchResult.click();
});

Then(/^I can open the Board from search results$/, async () => {
  await expect(BoardsPage.boardName).toHaveText(constants.BOARD_INITIAL);
});

Then(/^(\w+) board is displayed at Boards page$/, async (boardName) => {
  await expect(BoardsPage.boardName).toHaveText(boardName);
});

When(/^I choose to  create new board from the Main menu$/, async () => {
  await BoardsPage.mainMenu.createButton.click();
  await BoardsPage.mainMenu.createBoardButton.click();
});

When(/^I set (\w+) board name for Main menu board$/, async (boardName) => {
  await BoardsPage.boardCreate.inputBoardTitle.setValue(boardName);
});

When(/^I confirm board creation from Main menu$/, async () => {
  await BoardsPage.boardCreate.buttonCreateBoard.click();
});
