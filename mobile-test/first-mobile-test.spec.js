const wd = require('wd');
const { expect } = require('chai');

const serverConfig = {
  host: 'localhost',
  port: 4723
};

const desiredCapabilities = {
  platformName: 'Android',
  deviceName: 'Android Emulator',
  app: '/path/to/your/app.apk',
  automationName: 'UiAutomator2'
};

describe('Mobile App Test', function() {
  let driver;

  before(async function() {
    driver = wd.promiseChainRemote(serverConfig);
    await driver.init(desiredCapabilities);
  });

  after(async function() {
    await driver.quit();
  });

  it('should log in, navigate to profile, and validate username', async function() {
    // Log in
    await driver.elementById('com.example.app:id/username').sendKeys('your-username');
    await driver.elementById('com.example.app:id/password').sendKeys('your-password');
    await driver.elementById('com.example.app:id/login_button').click();

    // Assert that login was successful and home screen is displayed
    await driver.waitForElementById('com.example.app:id/home_screen', 5000);

    // Navigate to profile screen
    await driver.elementById('com.example.app:id/profile_button').click();

    // Assert that profile screen is displayed
    await driver.waitForElementById('com.example.app:id/profile_screen', 5000);

    // Validate the username in the profile screen
    const usernameElement = await driver.elementById('com.example.app:id/profile_username');
    const usernameText = await usernameElement.text();
    expect(usernameText).to.equal('your-username');
  });
});