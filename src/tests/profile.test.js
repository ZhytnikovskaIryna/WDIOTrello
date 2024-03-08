const ProfilePage = require("../pageobjects/profile.page");
const { BIO_DESCRIPTION } = require("../configs/test-data");

describe("Verify Profile changes", () => {
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
