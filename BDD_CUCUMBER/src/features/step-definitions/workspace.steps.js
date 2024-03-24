import WorkspacePage from "../../POM/workspace.page.js";
import { Given, When, Then } from "@wdio/cucumber-framework";
When(/^I open workspace page$/, async () => {
  await WorkspacePage.open();
});

When(/^I choose to  create new board from the workspace$/, async () => {
  await WorkspacePage.addBoard.click();
});

When(/^I set (\w+) board name for workspace board$/, async (boardName) => {
  await WorkspacePage.boardCreateWorkspace.inputBoardTitle.setValue(boardName);
});

When(/^I confirm board creation from workspace$/, async () => {
  await WorkspacePage.boardCreateWorkspace.buttonCreateBoard.click();
});
