import ProfilePage from "../POM/profile.page.js";
import { constants } from "../configs/test-data.js";

describe("Verify Profile changes", () => {
  afterEach(async function () {
    await ProfilePage.bio.setValue(" ");
    await ProfilePage.saveButton.click();
  });

  it("Edit bio in profile name", async function () {
    await ProfilePage.open();
    await ProfilePage.bio.setValue(constants.BIO_DESCRIPTION);
    await ProfilePage.saveButton.click();
    await ProfilePage.saveButton.waitForClickable();
    await browser.refresh();
    await expect(ProfilePage.bio).toHaveValue(constants.BIO_DESCRIPTION);
  });
});
