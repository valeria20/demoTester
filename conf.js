exports.config = {
  framework: 'mocha',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  getPageTimeout: 100000,
  allScriptsTimeout: 110000,
  w3c: false,
  capabilities: {
    'browserName': 'chrome',
    version: '',
    platform: 'ANY',
    'chromeOptions': {
      'args': ['disable-infobars=true', '--disable-gpu'],
      prefs: {
        download: {
          prompt_for_download: false,
          directory_upgrade: true,
          default_directory: __dirname
        }
      }
    }
  },
  
  SELENIUM_PROMISE_MANAGER: true,
  
  specs: ['e2e/tests/*-spec.js'],
  
  onPrepare: () => {
    browser.driver.manage().window().maximize();
  },

  mochaOpts: {
    reporter: "spec",
    slow: 3000,
    timeout: 600000
  }
};