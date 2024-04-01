type boardNameUnion = "Board for List"|"Board for Card"|"Board for Edit"|"Board Initial"|"Board for Workspace"|"Board for Main Menu";
enum boardNameEnum {
  BoardEdit="Board for Edit",
  BoardList = "Board for List",
  BoardCard="Board for Card",
  BoardInit = "Board Initial",
  BoardWorkspace = "Board for Workspace",
  BoardMainMenu = "Board for Main Menu"
}

interface constInterface{
  LIST_NAME: string,
  BOARD_NAME: boardNameUnion,
  CARD_NAME: string,
  BOARD_NAME_LIST: boardNameUnion,
  BOARD_NAME_CARD: boardNameUnion,
  BOARD_NAME_WORKSPACE: boardNameUnion,
  BOARD_NAME_MENU: boardNameUnion,
  BOARD_INITIAL: boardNameUnion,
  BIO_DESCRIPTION: string,
  USER_NAME: string,
  EXPECTED_LOGIN_ERROR:string
}

export const constants:constInterface = {
  LIST_NAME: "My list 100",
  BOARD_NAME: boardNameEnum.BoardEdit,
  CARD_NAME: "My card",
  BOARD_NAME_LIST: boardNameEnum.BoardList,
  BOARD_NAME_CARD: boardNameEnum.BoardCard,
  BOARD_NAME_WORKSPACE: boardNameEnum.BoardWorkspace,
  BOARD_NAME_MENU: boardNameEnum.BoardMainMenu,
  BOARD_INITIAL: boardNameEnum.BoardInit,
  BIO_DESCRIPTION: "Bio set by auto test",
  USER_NAME: "EPAM Trello Auto (testinguser409)",
  EXPECTED_LOGIN_ERROR:
    "Incorrect email address and / or password. If you recently migrated your Trello account to an Atlassian account, you will need to use your Atlassian account password. Alternatively, you can get help logging in.",
};


