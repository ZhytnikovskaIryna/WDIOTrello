import BoardsPage from "../POM/boards.page.ts";
import { constants } from "../configs/test-data.ts";

describe("Verify action on board:  cards", () => {
  it("Add card to existent list", async function () {
    await BoardsPage.createBoard(constants.BOARD_NAME_CARD);
    await BoardsPage.createList(constants.LIST_NAME);
    await browser.refresh();
    await BoardsPage.createCard(constants.CARD_NAME);
    await expect(BoardsPage.createdCardName).toHaveText(constants.CARD_NAME);
  });
});
