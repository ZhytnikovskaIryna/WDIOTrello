import { Page } from "./page.js";

class ProfilePage extends Page {
  get userName() {
    return $("#username");
  }

  get bio() {
    return $("#bio");
  }

  get saveButton() {
    return $("[type='submit']");
  }

  get memberAvatar() {
    return $("[data-testid='header-member-menu-avatar']");
  }

  open() {
    return super.open("u/testinguser409");
  }
}

export default new ProfilePage();
