type NameUnion =
  | "My list"
  | "My Card"
  | "Bio set by auto test"
  | "EPAM Trello Auto (testinguser409)";

enum boardNameEnum {
  BoardEdit = "Board for Edit",
  BoardList = "Board for List",
  BoardCard = "Board for Card",
  BoardInit = "Board Initial",
  BoardWorkspace = "Board for Workspace",
  BoardMainMenu = "Board for Main Menu",
}

interface constInterface {
  LIST_NAME: NameUnion;
  BOARD_NAME: boardNameEnum;
  CARD_NAME: NameUnion;
  BOARD_NAME_LIST: boardNameEnum;
  BOARD_NAME_CARD: boardNameEnum;
  BOARD_NAME_WORKSPACE: boardNameEnum;
  BOARD_NAME_MENU: boardNameEnum;
  BOARD_INITIAL: boardNameEnum;
  BIO_DESCRIPTION: NameUnion;
  USER_NAME: NameUnion;
  EXPECTED_LOGIN_ERROR: string;
}

export const constants: constInterface = {
  LIST_NAME: "My list",
  BOARD_NAME: boardNameEnum.BoardEdit,
  CARD_NAME: "My Card",
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

export function isCorrectError<T>(
  errorMessage: T,
  expectedErrorMessage: T
): boolean {
  return errorMessage === expectedErrorMessage;
}

export const emptyEmail = "Enter an email address";
export const emptyPassword = "Enter your password";
