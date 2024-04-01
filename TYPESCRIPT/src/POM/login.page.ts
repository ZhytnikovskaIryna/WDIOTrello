import { Page } from "./page.js";

class LoginPage extends Page {
  get inputUsername() {
    return $("form #user");
  }

  get inputPassword() {
    return $("form #password");
  }

  get btnSubmit() {
    return $("form [type='submit']");
  }

  get errorMessage() {
    return $("[data-testid='form-error']");
  }

  async login(username:string, password:string) {
    await this.open();
    await this.inputUsername.setValue(username);
    await this.btnSubmit.click();
    await this.inputPassword.waitForDisplayed();
    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();
  }

  open() {
    return browser.url("/login");
  }
}

export default new LoginPage();
