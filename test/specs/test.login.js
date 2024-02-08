const LoginPage = require('../pageobjects/login.page')
const credentials = require('../../wdio.conf')
const BoardsPage = require('../pageobjects/boards.page')
const {USER_NAME} = require('../pageobjects/config')
const expectChai = require('chai').expect


describe('Verify Login with positive and negative cases', () => {
    it('Login with valid credentials for your free account', async function() {
        this.retries(1);
        await LoginPage.open();
        await LoginPage.login(credentials.config.userTrello, credentials.config.passwordTrello);
        expectChai(await BoardsPage.item('memberAvatar').getAttribute('title')).to.equal(USER_NAME);

    })    

    it('Login with  existent account and invalid password', async function() {
        this.retries(1);
        await LoginPage.open();
        await LoginPage.login(credentials.config.userTrello, 'invalidPassword');
        expectChai(await LoginPage.errorMessage.getText()).to.have.string('Incorrect email address and / or password.')
      
    })
})



