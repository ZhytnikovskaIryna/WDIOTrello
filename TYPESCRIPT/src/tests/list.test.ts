import BoardsPage from "../POM/boards.page.js";
import { constants } from "../configs/test-data.js";

describe("Verify action on board: lists", () => {
  it("Add list to existent board", async function () {
    await BoardsPage.createBoard(constants.BOARD_NAME_LIST);
    await BoardsPage.createList(constants.LIST_NAME);
    await expect(BoardsPage.listTitle).toBeDisplayed();
    await expect(BoardsPage.listName).toHaveText(constants.LIST_NAME);
  });
});
