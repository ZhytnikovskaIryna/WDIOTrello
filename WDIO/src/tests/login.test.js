const LoginPage = require("../POM/login.page");
const credentials = require("../configs/wdio.conf");
const BoardsPage = require("../POM/boards.page");
const { USER_NAME, EXPECTED_LOGIN_ERROR } = require("../configs/test-data");

describe("Verify Login with positive and negative cases", () => {
  it("Login with valid credentials for your free account", async function () {
    await LoginPage.login(
      credentials.config.userTrello,
      credentials.config.passwordTrello
    );
    await expect(BoardsPage.memberAvatar).toHaveAttribute("title", USER_NAME);
  });

  it("Login with  existent account and invalid password", async function () {
    await LoginPage.login(credentials.config.userTrello, "invalidPassword");
    console.log("Log to see in spec report :)");
    await expect(LoginPage.errorMessage).toHaveTextContaining(
      EXPECTED_LOGIN_ERROR
    );
  });
});
