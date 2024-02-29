const BoardsPage = require("../pageobjects/boards.page");
const { LIST_NAME, BOARD_NAME_CARD, CARD_NAME } = require("../configs/config");

describe("Verify action on board:  cards", () => {
  it("Add card to existent list", async function () {
    await BoardsPage.createBoard(BOARD_NAME_CARD);
    await BoardsPage.createList(LIST_NAME);
    await browser.refresh();
    await BoardsPage.createCard(CARD_NAME);
    await expect(BoardsPage.createdCardName).toHaveText(CARD_NAME);
  });
});
