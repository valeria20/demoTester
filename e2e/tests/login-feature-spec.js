const MainPage = require('../page-objects/main-page');
const LoginPage = require('../page-objects/login-page');
const chai = require('chai');
const urls = require('../../data/urls');
const Helper = require('../../helpers/helper');
const invalidEmails = require('../../data/authData');
const mainPage = new MainPage();
const loginPage = new LoginPage();
const helper = new Helper();
const EC = protractor.ExpectedConditions;
const expect = chai.expect;
const TIMEOUT = 30000;

describe('Login feature spec', () => {

  before((done) => {
    browser.get(urls.base)
      .then(() => mainPage.chooseTheme('Material Light'))
      .then(() => browser.get(urls.login))
      .then(() => done())
      .catch(done);
  });

  beforeEach(done => {
    browser.refresh()
      .then(() => done())
      .catch(done);
  })

  it('Leave email and password fields empty', done => {
    //1. Click on password field
    helper.clickByElement(loginPage.passwordInputField())
      //2. Error message should appear
      .then(() => browser.wait(EC.visibilityOf(
        helper.findTextOnPage(' Email is required! ')),
        TIMEOUT))
      //3. Click on email field
      .then(() => helper.clickByElement(loginPage.emailInputField()))
      .then(() => browser.wait(EC.visibilityOf(
        helper.findTextOnPage(' Password is required! ')),
        TIMEOUT))
      .then(() => done())
      .catch(done);
  });

  invalidEmails.forEach(email => {
    it(`Put invalid email: ${email}`, done => {
      //1. Set invalid email
      loginPage.setEmail(email)
        //2. Click on password field
        .then(() => helper.clickByElement(loginPage.passwordInputField()))
        //3.Wait for error message
        .then(() => browser.wait(EC.visibilityOf(
          helper.findTextOnPage(' Email should be the real one! ')),
          1000))
        //Check that Login button is disabled
        .then((isPresent) => {
          expect(isPresent).to.be.true;
          return loginPage.loginButton().isEnabled();
        })
        .then((isEnabled) => {
          expect(isEnabled).to.be.false;
          done();
        })
        .catch(done);
    });
  });

  it('Put valid email and password', done => {
    loginPage.setEmail('enjoy_automation@super.puper')
      .then(() => loginPage.setPassword('super_password'))
      .then(() => loginPage.loginButton().isEnabled())
      .then((isEnabled) => {
        expect(isEnabled).to.be.true;
        done();
      })
      .catch(done);
  });

});

