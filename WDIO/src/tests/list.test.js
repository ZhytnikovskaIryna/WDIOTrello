const BoardsPage = require("../POM/boards.page");
const { LIST_NAME, BOARD_NAME_LIST } = require("../configs/test-data");

describe("Verify action on board: lists", () => {
  it("Add list to existent board", async function () {
    await BoardsPage.createBoard(BOARD_NAME_LIST);
    await BoardsPage.createList(LIST_NAME);
    await expect(BoardsPage.listTitle).toBeDisplayed();
    await expect(BoardsPage.listName).toHaveText(LIST_NAME);
  });
});
