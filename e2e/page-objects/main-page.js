const EC = protractor.ExpectedConditions;
const Helper = require('../../helpers/helper');
const helper = new Helper();
const TIMEOUT = 30000;

let MainPage = function () {
  this.themeCard = (theme) => element(by.xpath(`//nb-card-header[text()="${theme}"]`)); 
  this.chooseTheme = (theme) => {
    return helper.clickByElement(this.themeCard(theme));
  };
};

module.exports = MainPage; 