import ProfilePage from "../../POM/profile.page.js";

export const emptyProfile = async () => {
  await ProfilePage.bio.setValue(" ");
  await ProfilePage.saveButton.click();
};
