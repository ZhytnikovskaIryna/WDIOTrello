import { Page } from "./page.js";

class WorkspacePage extends Page {
  get addBoard() {
    return $(".mod-add");
  }

  open() {
    return super.open("w/userworkspace47193670");
  }
}

export default new WorkspacePage();
