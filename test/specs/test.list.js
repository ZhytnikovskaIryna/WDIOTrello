const LoginPage = require('../pageobjects/login.page')
const credentials = require('../../wdio.conf')
const BoardsPage = require('../pageobjects/boards.page')
const {LIST_NAME,BOARD_NAME_LIST} = require('../pageobjects/config')


describe('Verify action on board: adding lists and cards', () => {
    
    beforeEach(async  function() {
        this.retries(1);
        await LoginPage.open();
        await LoginPage.login(credentials.config.userTrello, credentials.config.passwordTrello);
        await $("[data-loading='false']").waitForDisplayed();
        await BoardsPage.open();
        await BoardsPage.mainMenu.menuItem('createButton').click();
        await BoardsPage.mainMenu.menuItem('createBoardButton').click();
        await BoardsPage.boardCreate.boardCreateWindow('inputBoardTitle').setValue(BOARD_NAME_LIST);
        await BoardsPage.boardCreate.boardCreateWindow('buttonCreateBoard').click();
        });

    it('Add list to existent board', async  function() {
        this.retries(1);
        await BoardsPage.listParams('listTitle').setValue(LIST_NAME);
        await BoardsPage.listParams('addListButton').click();      
        await expect(BoardsPage.listParams('listTitle')).toBeDisplayed();
        await expect(BoardsPage.listParams('listName')).toHaveText(LIST_NAME);
    })

})