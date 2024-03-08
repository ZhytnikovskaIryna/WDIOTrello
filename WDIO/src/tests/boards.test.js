const BoardsPage = require("../POM/boards.page");
const WorkspacePage = require("../POM/workspace.page");
const {
  BOARD_NAME_WORKSPACE,
  BOARD_NAME_MENU,
} = require("../configs/test-data");

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
