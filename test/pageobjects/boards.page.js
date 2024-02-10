const Page = require("./page");

class BoardsPage extends Page {
  //   item(param){
  //       const selectors = {
  //           boardName : "[data-testid='board-name-display']",
  //           memberAvatar : "[data-testid='header-member-menu-avatar']",
  //       };
  //       return $(selectors[param]);
  //   }
  get boardName() {
    return $("[data-testid='board-name-display']");
  }

  get memberAvatar() {
    return $("[data-testid='header-member-menu-avatar']");
  }

  //   listParams(param){
  //        const selectors = {
  //            listTitle : "textarea[name='Enter list title…']",
  //            addListButton : "[data-testid='list-composer-add-list-button']",
  //            listName : "[data-testid='list-name']",
  //            addCard : "[data-testid='list-add-card-button']",
  //            cardName : "[data-testid='list-card-composer-textarea']",
  //            cardCreate : "[data-testid='list-card-composer-add-card-button']",
  //            createdCardName:"[data-testid='card-name']",
  //        };
  //        return $(selectors[param]);
  //    }

  get listTitle() {
    return $("textarea[name='Enter list title…']");
  }

  get addListButton() {
    return $("[data-testid='list-composer-add-list-button']");
  }

  get listName() {
    return $("[data-testid='list-name']");
  }

  get addCard() {
    return $("[data-testid='list-add-card-button']");
  }

  get cardName() {
    return $("[data-testid='list-card-composer-textarea']");
  }

  get cardCreate() {
    return $("[data-testid='list-card-composer-add-card-button']");
  }

  get createdCardName() {
    return $("[data-testid='card-name']");
  }

  open() {
    return super.open("u/testinguser409/boards");
  }
}
module.exports = new BoardsPage();
