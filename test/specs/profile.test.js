const LoginPage = require("../pageobjects/login.page");
const credentials = require("../../wdio.conf");
const ProfilePage = require("../pageobjects/profile.page");
const { BIO_DESCRIPTION } = require("../support/config");

describe("Verify Profile changes", () => {
  beforeEach(async function () {
    await LoginPage.open();
    await LoginPage.login(
      credentials.config.userTrello,
      credentials.config.passwordTrello
    );
    await LoginPage.isPageLoaded.waitForDisplayed();
  });

  afterEach(async function () {
    await ProfilePage.bio.setValue(" ");
    await ProfilePage.saveButton.click();
  });

  it("Edit bio in profile name", async function () {
    await ProfilePage.open();
    await ProfilePage.bio.setValue(BIO_DESCRIPTION);
    await ProfilePage.saveButton.click();
    await ProfilePage.saveButton.waitForClickable();
    await browser.refresh();
    await expect(ProfilePage.bio).toHaveValue(BIO_DESCRIPTION);
  });
});
