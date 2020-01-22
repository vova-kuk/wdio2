const HOST = 'https://stage.pasv.us';

const URL_LOGIN = `${HOST}/user/login`;
const URL_REPORT_CREATE = `${HOST}/diary/create`;

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
    description: 'Eat, sleep, code, rave, repeat...',
    confirmation: 'Diary created'
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
    saveButton: 'form button[type="submit"]',
    h4: 'h4'
};

module.exports = { URL_LOGIN, URL_REPORT_CREATE, userLogin, pageLoginSelectors, pageReportCreate, pageReportCreateSelectors};