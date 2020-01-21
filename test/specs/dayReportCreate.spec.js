const { expect } = require('chai');
const { URL_LOGIN, URL_REPORT_CREATE } = require('./register_data');


const userLogin = {
    email: '1vovakuk7@gmail.com',
    password: 'vova777'
};

const pageLoginSelectors = {
    emailInput: 'form input[name="email"]',
    passwordInput: 'form input[name="password"]',
    submitButton: 'form button[type="submit"]'
};

const pageReportCreate = {
    title: 'Progress Monitor',
    h1: 'Create day report',
    buttonText: 'Save',
    morale: '9',
    hours: '8',
    description: 'Eat, sleep, code, rave, repeat...'
};

const pageReportCreateSelectors = {
    h1: 'h1',
    morale: 'form select[name="morale"]',
    hours: 'form input[name="hours"]',
    description: 'form textarea[name="description"]',
    watchedLectures: 'form input[id="input-[3]"]',
    readDocumentation: 'form input[id="input-[4]"]',
    codePractice: 'form input[id="input-[5]"]',
    quizPractice: 'form input[id="input-[6]"]',
    interviewPreparation: 'form input[id="input-[7]"]',
    recruiterPhoneCall: 'form input[id="input-[8]"]',
    interviewTechnicalScreen: 'form input[id="input-[9]"]',
    saveButton: 'form button[type="submit"]'
};



describe('CREATE DAY REPORT', () => {
    before('Login as admin', () => {
        browser.url(URL_LOGIN);
        $(pageLoginSelectors.emailInput).setValue(userLogin.email);
        $(pageLoginSelectors.passwordInput).setValue(userLogin.password);
        $(pageLoginSelectors.submitButton).click();
        browser.pause(1000);
    });

    it('should have the right title', () => {
        browser.url(URL_REPORT_CREATE);
        const actualTitle = browser.getTitle();
        const expectedTitle = pageReportCreate.title;
        expect(actualTitle).equal(expectedTitle);
    });

    it('should have a correct title', () => {
        const actual = $(pageReportCreateSelectors.h1).getText();
        const expected = pageReportCreate.h1;
        expect(actual).equal(expected);
    });

    it('should choose What is your morale dropdown', () => {
        const element = $(pageReportCreateSelectors.morale);
        element.selectByVisibleText(pageReportCreate.morale);
        browser.pause(1000);
    });

    it('should fill How many hours did you study/practice today field', () => {
        const element = $(pageReportCreateSelectors.hours);
        element.setValue(pageReportCreate.hours);
        browser.pause(1000);
    });

    it('should fill How was your day field', () => {
        const element = $(pageReportCreateSelectors.description);
        element.setValue(pageReportCreate.description);
        browser.pause(1000);
    });

    it('should click Watched lectures mark', () => {
        const element = $(pageReportCreateSelectors.watchedLectures);
        element.click();
        browser.pause(1000);
    });

    it('should click Read documentation mark', () => {
        const element = $(pageReportCreateSelectors.readDocumentation);
        element.click();
        browser.pause(1000);
    });

    it('should click Code practice mark', () => {
        const element = $(pageReportCreateSelectors.codePractice);
        element.click();
        browser.pause(1000);
    });

    it('should click Quiz practice mark', () => {
        const element = $(pageReportCreateSelectors.quizPractice);
        element.click();
        browser.pause(1000);
    });

    it('should click Interview preparation mark', () => {
        const element = $(pageReportCreateSelectors.interviewPreparation);
        element.click();
        browser.pause(1000);
    });

    it('should click Recruiter phone call mark', () => {
        const element = $(pageReportCreateSelectors.recruiterPhoneCall);
        element.click();
        browser.pause(1000);
    });

    it('should click Interview technical screen mark', () => {
        const element = $(pageReportCreateSelectors.interviewTechnicalScreen);
        element.click();
        browser.pause(1000);
    });

    it('should click Save button', () => {
        const element = $(pageReportCreateSelectors.saveButton);
        element.click();
        browser.pause(5000);
    });


});


