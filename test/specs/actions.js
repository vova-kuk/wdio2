const HOST = 'https://stage.pasv.us';

const URL_LOGIN = `${HOST}/user/login`;

const userLogin = {
    email: '1vovakuk7@gmail.com',
    password: 'vova777'
};

const pageLoginSelectors = {
    emailInput: 'form input[name="email"]',
    passwordInput: 'form input[name="password"]',
    submitButton: 'form button[type="submit"]'
};

function loginAsAdmin () {
    browser.url(URL_LOGIN);
    $(pageLoginSelectors.emailInput).setValue(userLogin.email);
    $(pageLoginSelectors.passwordInput).setValue(userLogin.password);
    $(pageLoginSelectors.submitButton).click();
    browser.pause(1000);
}

module.exports = { loginAsAdmin};