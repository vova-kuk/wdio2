const {expect} = require('chai');

const email = Math.random() + 'vovakuk7@gmail.com';
const firstName = 'Vova';
const lastName = 'Kuk';
const password = 'Vova777';

describe('Register page', () => {
    before(() => {
        browser.url('https://stage.pasv.us/user/register')
    })

    it('should have the right title', () => {
        const actual = browser.getTitle();
        const expected = 'Progress Monitor';
        expect(actual).equal(expected);
    })

    it('should have a correct title', () => {
        const actual = $('h1').getText();
        const expected = 'User Register';
        expect(actual).equal(expected);
    })

    it('should have a correct description', () => {
        const actual = $('p').getText();
        const expected = 'Profiles with fictitious or dummy data will be deleted.';
        expect(actual).equal(expected);
    })

    it('should have a correct submit button text', () => {
        const actual = $('form button').getText();
        const expected = 'Submit';
        expect(actual).equal(expected);
    })

    it('should fill First Name field', () => {
        const element = $('form input[name="firstName"]');
        element.setValue(firstName);
        browser.pause(1000);
    })

    it('should fill Last Name field', () => {
        const element = $('form input[name="lastName"]');
        element.setValue(lastName);
        browser.pause(1000);
    })

    it('should fill Cell phone number field', () => {
        const element = $('form input[name="phone"]');
        element.setValue('17775551122');
        browser.pause(1000);
    })

    it('should fill Email field', () => {
        const element = $('form input[name="email"]');
        element.setValue(email);
        browser.pause(1000);
    })

    it('should fill Password field', () => {
        const element = $('form input[name="password"]');
        element.setValue(password);
        browser.pause(1000);
    })

    it('should fill About field', () => {
        const element = $('form textarea[name="about"]');
        element.setValue('Information about my experience, skills, hobbies.');
        browser.pause(1000);
    })

    it('should fill My goals field', () => {
        const element = $('form textarea[name="goals"]');
        element.setValue('Information about my goals in programming, career.');
        browser.pause(1000);
    })

    it('should choose English level dropdown', () => {
        const element = $('form select[name="englishLevel"]');
        element.selectByVisibleText('Zero');
        browser.pause(1000);
    })

    it('should click button', () => {
        const element = $('form button[type="submit"]');
        element.click();
        browser.pause(1000);
    })
})


describe('Login page', () => {
    before(() => {
        browser.url('https://stage.pasv.us/user/login')
    })

    it('should fill Email field', () => {
        const element = $('form input[name="email"]');
        element.setValue(email);
        browser.pause(1000);
    })

    it('should fill Password field', () => {
        const element = $('form input[name="password"]');
        element.setValue(password);
        browser.pause(1000);
    })

    it('should click button', () => {
        const element = $('form button[type="submit"]');
        element.click();
        browser.pause(1000);
    })

    it('should have a correct part of link', () => {
        const link = $('*=Vova Kuk');
        link.getText();
        browser.pause(2000);
    });


})


describe('Home page', () => {
    before(() => {
        browser.url('https://stage.pasv.us')
    })

    it('should have the right title', () => {
        const actual = browser.getTitle();
        const expected = 'Progress Monitor';
        expect(actual).equal(expected);
        browser.pause(2000);
    })
})



