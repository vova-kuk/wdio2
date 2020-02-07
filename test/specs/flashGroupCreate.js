const { expect } = require('chai');
const { loginAsAdmin } = require('./actions');

describe('FLASH GROUP CREATE', () => {
    before('Login as admin', () => {
        loginAsAdmin();
    });

    after('AFTER', () => {
        browser.pause(3000);
    });

    it('should click top menu Cards', () => {
        browser.$('//div[@id="site-menu"]//a[@qa="cards-link"]').click();
    });

    it('should click button Create new FlashGroup', () => {
        browser.$('//button[@qa="flash-create-new-group"]').click();
        browser.pause(400);
    });

    it('should check if modal form is open', () => {
        const el = browser.$('//div[contains(@class, "sidepanel")]');
        expect(el.isDisplayed()).true;
    });

    it('should check if modal form title is correct', () => {
        const actual = browser.$('//div[contains(@class, "sidepanel")]//*[@class="modal-title"]').getText();
        const expected = 'Create Flash Group';
        expect(actual).eq(expected);
    });

    it('should fill out input group name', () => {
        const el = browser.$('//div[contains(@class, "sidepanel")]//input[@name="name"]');
        el.setValue('My group name 123');
    });

    it('should fill out input group description', () => {
        const el = browser.$('//div[contains(@class, "sidepanel")]//input[@name="description"]');
        el.setValue('My group description 123...');
    });

    it('should submit form', () => {
        const el = browser.$('//div[contains(@class, "sidepanel")]//button[@type="submit"]');
        el.click();
        browser.pause(500);
    });

    it('should first item in list be equal created group title', () => {
        const actual = browser.$('//div[@qa="flash-group-list "]//h4/a').getText();
        const expected = 'My group name 123';
        expect(actual).eq(expected);
    });

    it('should first item in list be equal created group description', () => {
        const actual = browser.$('//div[@qa="flash-group-list "]//div[@qa="description"]').getText();
        const expected = 'My group description 123...';
        expect(actual).eq(expected);
    });

    it('should verify created title group is clickable', () => {
        const el = browser.$('//div[@qa="flash-group-list "]//h4/a');
        el.click();
        browser.pause(300);
    });

    it('should clicked group has correct title', () => {
        const actual = browser.$('//h1').getText();
        const expected = 'My group name 123';
        expect(actual).eq(expected);
    });
});