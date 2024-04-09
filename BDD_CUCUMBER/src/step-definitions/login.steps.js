import { Given, When, Then } from "@wdio/cucumber-framework";
import LoginPage from "../POM/login.page.js";
import { config } from "../configs/wdio.conf.js";
import BoardsPage from "../POM/boards.page.js";
import { constants } from "../configs/test-data.js";

Given(/^I am  at  Trello home page$/, async () => {
  await LoginPage.open();
});

When(/^I enter valid email$/, async () => {
  await LoginPage.inputUsername.setValue(config.userTrello);
});

When(/^Click Submit credentials button$/, async () => {
  await LoginPage.btnSubmit.click();
});

When(/^I enter (\w+) password$/, async (valid) => {
  await LoginPage.inputPassword.waitForDisplayed();
  if (valid === "true") {
    await LoginPage.inputPassword.setValue(config.passwordTrello);
  } else {
    await LoginPage.inputPassword.setValue("InvalidPassword");
  }
});

Then(/^I see my name in account icon popup$/, async () => {
  await expect(BoardsPage.memberAvatar).toHaveAttribute(
    "title",
    constants.USER_NAME
  );
});

Then(
  /^I see error message regarding incorrect email or password$/,
  async () => {
    await expect(LoginPage.errorMessage).toHaveText(
      expect.stringContaining(constants.EXPECTED_LOGIN_ERROR)
    );
  }
);
