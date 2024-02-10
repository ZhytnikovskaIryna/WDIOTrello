const LoginPage = require("../pageobjects/login.page");
const credentials = require("../../wdio.conf");
const BoardsPage = require("../pageobjects/boards.page");
const { USER_NAME } = require("../support/config");
const expect = require("chai").expect;

describe("Verify Login with positive and negative cases", () => {
  it("Login with valid credentials for your free account", async function () {
    await LoginPage.open();
    await LoginPage.login(
      credentials.config.userTrello,
      credentials.config.passwordTrello
    );
    expect(await BoardsPage.memberAvatar.getAttribute("title")).to.equal(
      USER_NAME
    );
  });

  it("Login with  existent account and invalid password", async function () {
    await LoginPage.open();
    await LoginPage.login(credentials.config.userTrello, "invalidPassword");
    expect(await LoginPage.errorMessage.getText()).to.have.string(
      "Incorrect email address and / or password."
    );
  });
});
