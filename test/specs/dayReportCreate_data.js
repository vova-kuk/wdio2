const HOST = 'https://stage.pasv.us';

const URL_REPORT_CREATE = `${HOST}/diary/create`;


const pageReportCreate = {
    title: 'Progress Monitor',
    h1: 'Create day report',
    buttonText: 'Save',
    morale: '9',
    hours: '7',
    description: 'Started work on my resume. JS and Java practice on CW. Watched video about CSS.',
    confirmation: 'Get last (50) day reports'
};

const pageReportCreateSelectors = {
    h1: 'h1',
    morale: 'form select[name="morale"]',
    hours: 'form input[name="hours"]',
    description: 'form textarea[name="description"]',
    watchedLectures: 'form input[label="Watched lectures"]',
    readDocumentation: 'form input[label="Read documentation"]',
    codePractice: 'form input[label="Code practice"]',
    quizPractice: 'form input[label="Quiz practice"]',
    interviewPreparation: 'form input[label="Interview preparation"]',
    recruiterPhoneCall: 'form input[label="Recruiter phone call"]',
    interviewTechnicalScreen: 'form input[label="Interview technical screen"]',
    saveButton: 'form button[type="submit"]',
    h4: 'h4'
};

module.exports = { URL_REPORT_CREATE, pageReportCreate, pageReportCreateSelectors};