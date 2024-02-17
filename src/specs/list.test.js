const BoardsPage = require("../pageobjects/boards.page");
const { LIST_NAME, BOARD_NAME_LIST } = require("../support/config");

describe("Verify action on board: adding lists and cards", () => {
  it("Add list to existent board", async function () {
    await BoardsPage.createBoard(BOARD_NAME_LIST);
    await BoardsPage.listTitle.setValue(LIST_NAME);
    await BoardsPage.addListButton.click();
    await expect(BoardsPage.listTitle).toBeDisplayed();
    await expect(BoardsPage.listName).toHaveText(LIST_NAME);
  });
});
