const LoginPage = require('../pageobjects/login.page')
const credentials = require('../../wdio.conf')
const BoardsPage = require('../pageobjects/boards.page')
const {BOARD_INITIAL,USER_NAME} = require('../pageobjects/config')
const fs = require('fs');

describe('Verify Search from main menu', () => {

    beforeEach(async function() {
        this.retries(1);
        await LoginPage.open();
        await LoginPage.login(credentials.config.userTrello, credentials.config.passwordTrello);
        await $("[data-loading='false']").waitForDisplayed();
    });

    it('Search for existent board at my boards page', async function() {
        this.retries(1);

        await browser.waitUntil(async function () {
        return (await (BoardsPage.item('memberAvatar')).getAttribute('title')) === USER_NAME
        }, {
        timeout: 10000,
        timeoutMsg: 'page not fully loaded after 10 sec'
        })
         await BoardsPage.mainMenu.menuItem('searchInput').setValue(BOARD_INITIAL);
         await BoardsPage.mainMenu.menuItem('searchResult').click();
         await expect(BoardsPage.item('boardName')).toHaveText(BOARD_INITIAL);
    })
})