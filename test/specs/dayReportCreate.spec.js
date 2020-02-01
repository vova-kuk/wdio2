const { expect } = require('chai');
const { URL_REPORT_CREATE, pageReportCreate, pageReportCreateSelectors } = require('./dayReportCreate_data');
const { URL_LOGIN, userLogin, pageLoginSelectors, } = require('./userLogin_data');




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

describe('Confirmation report create', () => {
    it('should have a correct title', () => {
        const actualH4text = $(pageReportCreateSelectors.h4).getText();
        const expectedH4Text = pageReportCreate.confirmation;
        expect(actualH4text).equal(expectedH4Text);
        browser.pause(1000);
    });
});


