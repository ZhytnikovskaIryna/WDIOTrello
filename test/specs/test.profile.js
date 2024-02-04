const LoginPage = require('../pageobjects/login.page')
const credentials = require('../../wdio.conf')
const ProfilePage = require('../pageobjects/profile.page')
const {BIO_DESCRIPTION} = require('../pageobjects/config')

describe('Verify Profile changes', () => {
    
    beforeEach(async function() {
        this.retries(1);
        await LoginPage.open();
        await LoginPage.login(credentials.config.userTrello, credentials.config.passwordTrello);
        await $("[data-loading='false']").waitForDisplayed();
        });
        
    afterEach(async function() {
        this.retries(1);
        await ProfilePage.item('bio').setValue(" ");
        await ProfilePage.item('saveButton').click();
        });

    it('Edit bio in profile name', async function() {
        this.retries(1);
        await ProfilePage.open();
        await ProfilePage.item('bio').setValue(BIO_DESCRIPTION);
        await ProfilePage.item('saveButton').click();
        await ProfilePage.item('saveButton').waitForClickable();
        await browser.refresh();
        await expect(ProfilePage.item('bio')).toHaveValue(BIO_DESCRIPTION);

    })
})

