import LoginPage from "../POM/login.page.ts";
import { config } from "../configs/wdio.conf.ts";
import BoardsPage from "../POM/boards.page.ts";
import { constants } from "../configs/test-data.ts";
import {
  isCorrectError,
  emptyEmail,
  emptyPassword,
} from "../configs/test-data.js";
import { expect as expectChai } from "chai";

describe("Verify Login with positive and negative cases", () => {
  it("Login with empty password value", async function () {
    await LoginPage.open();
    await LoginPage.inputUsername.setValue("notrealuser@gmail.com");
    await LoginPage.btnSubmit.click();
    await LoginPage.loginSubmit.waitForClickable();
    await LoginPage.loginSubmit.click();
    let result: boolean = isCorrectError(
      emptyPassword,
      await LoginPage.emptyPasswordError.getText()
    );
    await expectChai(result).to.be.true;
  });

  it("Login with empty email name", async function () {
    await LoginPage.open();
    await LoginPage.inputUsername.setValue("NotValid");
    await LoginPage.btnSubmit.click();
    await LoginPage.loginSubmit.click();
    let result: boolean = isCorrectError(
      emptyEmail,
      await LoginPage.emptyUserError.getText()
    );
    await expectChai(result).to.be.true;
  });

  it("Login with valid credentials for your free account", async function () {
    await LoginPage.login(config.userTrello, config.passwordTrello);
    expectChai(await BoardsPage.memberAvatar.getAttribute("title")).to.equal(
      constants.USER_NAME
    );
  });

  it("Login with  existent account and invalid password", async function () {
    await LoginPage.login(config.userTrello, "invalidPassword");
    console.log("Log to see in spec report :)");
    await expectChai(await LoginPage.errorMessage.getText()).to.have.a.string(
      constants.EXPECTED_LOGIN_ERROR
    );
  });
});
