import { Page } from "./page.ts";

class WorkspacePage extends Page {
  get addBoard() {
    return $(".mod-add");
  }

  open() {
    return browser.url("/w/userworkspace47193670");
  }
}

export default new WorkspacePage();
