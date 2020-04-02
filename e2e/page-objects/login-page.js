let LoginPage = function () {
  
  this.emailInputField = () => element(by.id('input-email'));
  this.passwordInputField = () => element(by.id('input-password'));
  this.loginButton = () => element(by.xpath('//button[text()=" Log In "]'));

  this.setEmail = (email) => {
    return this.emailInputField().sendKeys(email);
  };

  this.setPassword = (password) => {
    return this.passwordInputField().sendKeys(password);
  };
};

module.exports = LoginPage; 