import { Given, When, Then } from "@wdio/cucumber-framework";
import ProfilePage from "../../POM/profile.page.js";
import { constants } from "../../configs/test-data.js";
import { After, Before } from "@wdio/cucumber-framework";
import { emptyProfile } from "../support/hooks.js";

When(/^I open ‘Profile and visibility’ tab for Profile page$/, async () => {
  await ProfilePage.open();
});

When(/^I set new bio$/, async () => {
  await ProfilePage.bio.setValue(constants.BIO_DESCRIPTION);
});

When(/^I Save changes in ‘Profile and visibility’ tab$/, async () => {
  await ProfilePage.saveButton.click();
  await ProfilePage.saveButton.waitForClickable();
});

Then(/^changes are saved in ‘Profile and visibility’ tab$/, async () => {
  await expect(ProfilePage.bio).toHaveValue(constants.BIO_DESCRIPTION);
});

Before(function () {
  browser.maximizeWindow();
});
After({ tags: "@cleanAfter" }, emptyProfile);
