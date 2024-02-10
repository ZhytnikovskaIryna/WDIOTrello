const Page = require("./page");

class ProfilePage extends Page {
  //  item(param){
  //      const selectors = {
  //         userName: "#username",
  //         bio: "#bio",
  //         saveButton: "[type='submit']",
  //         memberAvatar: "[data-testid='header-member-menu-avatar']",
  //      };
  //      return $(selectors[param]);
  //    }

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

module.exports = new ProfilePage();
