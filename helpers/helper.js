const EC = protractor.ExpectedConditions;
const TIMEOUT = 30000;

let Helper = function () {
  this.clickByElement = (webElem) => {
    return browser.wait(EC.visibilityOf(webElem), TIMEOUT)
      .then(() => webElem.click());
  };

  this.findTextOnPage = (text) => element(by.xpath(`//*[text()="${text}"]`));
};

module.exports = Helper;