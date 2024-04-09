import ProfilePage from "../POM/profile.page.js";
import { After, Before } from "@wdio/cucumber-framework";

export const emptyProfile = async () => {
  await ProfilePage.bio.setValue(" ");
  await ProfilePage.saveButton.click();
};

Before(function () {
  browser.maximizeWindow();
});
After({ tags: "@cleanAfter" }, emptyProfile);
