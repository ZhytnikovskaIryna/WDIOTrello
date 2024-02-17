const BoardsPage = require("../pageobjects/boards.page");
const { LIST_NAME, BOARD_NAME_CARD, CARD_NAME } = require("../support/config");

describe("Verify action on board: adding lists and cards", () => {
  it("Add card to existent list", async function () {
    await BoardsPage.createBoard(BOARD_NAME_CARD);
    await BoardsPage.listTitle.setValue(LIST_NAME);
    await BoardsPage.addListButton.click();
    await browser.refresh();
    await BoardsPage.addCard.click();
    await BoardsPage.cardName.setValue(CARD_NAME);
    await BoardsPage.cardCreate.click();
    await expect(BoardsPage.createdCardName).toHaveText(CARD_NAME);
  });
});
