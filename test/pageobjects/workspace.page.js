const Page = require("./page");

class WorkspacePage extends Page {
  //   item(param){
  //     const selectors = {
  //       addBoard: ".mod-add",
  // };
  //    return $(selectors[param]);
  //  }
  get addBoard() {
    return $(".mod-add");
  }

  open() {
    return super.open("w/userworkspace47193670");
  }
}

module.exports = new WorkspacePage();
