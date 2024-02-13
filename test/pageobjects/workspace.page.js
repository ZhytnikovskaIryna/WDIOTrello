const Page = require("./page");

class WorkspacePage extends Page {
  get addBoard() {
    return $(".mod-add");
  }

  open() {
    return super.open("w/userworkspace47193670");
  }
}

module.exports = new WorkspacePage();
