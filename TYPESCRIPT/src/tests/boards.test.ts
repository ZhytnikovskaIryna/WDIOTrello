import BoardsPage from "../POM/boards.page.js";
import WorkspacePage from "../POM/workspace.page.ts";
import { constants } from "../configs/test-data.ts";
let BOARD_NAME_WORKSPACE = constants.BOARD_NAME_WORKSPACE;
let BOARD_NAME_MENU = constants.BOARD_NAME_MENU;

describe("Verify adding new boards", () => {
  it("Add new board from Workspace page", async function () {
    await WorkspacePage.open();
    await WorkspacePage.addBoard.click();
    await WorkspacePage.boardCreateWorkspace.inputBoardTitle.setValue(
      BOARD_NAME_WORKSPACE
    );
    await WorkspacePage.boardCreateWorkspace.buttonCreateBoard.click();
    await expect(BoardsPage.boardName).toHaveText(BOARD_NAME_WORKSPACE);
  });

  it(" Add new board from my main menu when you are at boards page", async function () {
    await BoardsPage.createBoard(BOARD_NAME_MENU);
    await expect(BoardsPage.boardName).toHaveText(BOARD_NAME_MENU);
  });
});
