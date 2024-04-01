import BoardsPage from "../POM/boards.page.js";
import { constants } from "../configs/test-data.js";

describe("Verify Search from main menu", () => {
  it("Search for existent board at my boards page", async function () {
    await browser.waitUntil(
      async function () {
        return (
          (await BoardsPage.memberAvatar.getAttribute("title")) ===
          constants.USER_NAME
        );
      },
      {
        timeout: 10000,
        timeoutMsg: "page not fully loaded after 10 sec",
      }
    );
    await BoardsPage.mainMenu.searchInput.setValue(constants.BOARD_INITIAL);
    await BoardsPage.mainMenu.searchResult.click();
    await expect(BoardsPage.boardName).toHaveText(constants.BOARD_INITIAL);
  });
});
