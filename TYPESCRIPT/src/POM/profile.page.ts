import { Page } from "./page.ts";

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
    return browser.url("/u/testinguser409");
  }
}

export default new ProfilePage();
