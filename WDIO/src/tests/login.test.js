import LoginPage from "../POM/login.page.js";
import { config } from "../configs/wdio.conf.js";
import BoardsPage from "../POM/boards.page.js";
import { constants } from "../configs/test-data.js";

describe("Verify Login with positive and negative cases", () => {
  it("Login with valid credentials for your free account", async function () {
    await LoginPage.login(config.userTrello, config.passwordTrello);
    await expect(BoardsPage.memberAvatar).toHaveAttribute(
      "title",
      constants.USER_NAME
    );
  });

  it("Login with  existent account and invalid password", async function () {
    await LoginPage.login(config.userTrello, "invalidPassword");
    console.log("Log to see in spec report :)");
    await expect(LoginPage.errorMessage).toHaveTextContaining(
      constants.EXPECTED_LOGIN_ERROR
    );
  });
});
