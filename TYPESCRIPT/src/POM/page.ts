import { MainMenu, BoardCreateWindow } from "./components/index.ts";

export abstract class Page {
  mainMenu: MainMenu;
  boardCreate: BoardCreateWindow;
  boardCreateWorkspace: BoardCreateWindow;
  constructor() {
    this.mainMenu = new MainMenu();
    this.boardCreate = new BoardCreateWindow(
      '[data-testid="header-create-menu-popover"]'
    );
    this.boardCreateWorkspace = new BoardCreateWindow('[data-elevation="1"]');
  }
  get isPageLoaded() {
    return $("[data-loading='false']");
  }
  abstract open(path: string): void;
}
