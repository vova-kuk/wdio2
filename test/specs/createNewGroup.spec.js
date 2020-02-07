const { expect } = require('chai');

const { groupSelectors } = require('./createNewGroup_data');
const { loginAsAdmin } = require('./actions');

describe('FLASH GROUP CREATE', () => {
    before('Login as admin', () => {
        loginAsAdmin();
    });

    it('should click GROUPS navigation link', () => {
        $(groupSelectors.groupsLink).click();
        browser.pause(500);
    });

    it('should check if page is correct', ()=> {
        const actual = $('h1').getText();
        const expected = 'Groups';
        expect(actual).eq(expected);
    });

    it('should click CREATE NEW GROUP button', ()=> {
        $(groupSelectors.createButton).click();
    });

    it('should fill-out and submit the form', ()=> {
        $(groupSelectors.name).setValue('QA-7');
        $(groupSelectors.description).setValue('Group description');
        $(groupSelectors.accessType).selectByVisibleText('All');
        $(groupSelectors.submitButton).click();
        browser.pause(1000);
    });

    it('should check for right notification', ()=> {
        const actual = $(groupSelectors.notification).getText();
        const expected = 'Group created';
        expect(actual).eq(expected);
    });

});