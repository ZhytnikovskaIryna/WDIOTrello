const LoginPage = require("../pageobjects/login.page");
const credentials = require("../../wdio.conf");
const BoardsPage = require("../pageobjects/boards.page");
const { USER_NAME } = require("../support/config");

describe("Verify Login with positive and negative cases", () => {
  it("Login with valid credentials for your free account", async function () {
    await LoginPage.open();
    await LoginPage.login(
      credentials.config.userTrello,
      credentials.config.passwordTrello
    );
    await expect(BoardsPage.memberAvatar).toHaveAttribute("title", USER_NAME);
  });

  it("Login with  existent account and invalid password", async function () {
    await LoginPage.open();
    await LoginPage.login(credentials.config.userTrello, "invalidPassword");
    await expect(LoginPage.errorMessage).toHaveTextContaining(
      "Incorrect email address and / or password. If you recently migrated your Trello account to an Atlassian account, you will need to use your Atlassian account password. Alternatively, you can get help logging in."
    );
  });
});
