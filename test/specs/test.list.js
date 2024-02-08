const LoginPage = require('../pageobjects/login.page')
const credentials = require('../../wdio.conf')
const BoardsPage = require('../pageobjects/boards.page')
const {LIST_NAME,BOARD_NAME_LIST} = require('../pageobjects/config')
const expectChai = require('chai').expect


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
        const listTitleDisplayed = await BoardsPage.listParams('listTitle').isDisplayed();
        const listName = await BoardsPage.listParams('listName').getText();
        expectChai(listTitleDisplayed ).to.be.true;
        expectChai (listName).to.equal(LIST_NAME)
    })

})