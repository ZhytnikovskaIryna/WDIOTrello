const LoginPage = require("../pageobjects/login.page");
const credentials = require("../../wdio.conf");
const BoardsPage = require("../pageobjects/boards.page");
const { BOARD_INITIAL, USER_NAME } = require("../support/config");

describe("Verify Search from main menu", () => {
  beforeEach(async function () {
    this.retries(1);
    await LoginPage.open();
    await LoginPage.login(
      credentials.config.userTrello,
      credentials.config.passwordTrello
    );
    await LoginPage.isPageLoaded.waitForDisplayed();
  });

  it("Search for existent board at my boards page", async function () {
    await browser.waitUntil(
      async function () {
        return (
          (await BoardsPage.memberAvatar.getAttribute("title")) === USER_NAME
        );
      },
      {
        timeout: 10000,
        timeoutMsg: "page not fully loaded after 10 sec",
      }
    );
    await BoardsPage.mainMenu.searchInput.setValue(BOARD_INITIAL);
    await BoardsPage.mainMenu.searchResult.click();
    await expect(BoardsPage.boardName).toHaveText(BOARD_INITIAL);
  });
});
