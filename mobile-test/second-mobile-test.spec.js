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

  it('should log in, fill out the form, and submit', async function() {
    // Log in
    await driver.elementById('com.example.app:id/username').sendKeys('your-username');
    await driver.elementById('com.example.app:id/password').sendKeys('your-password');
    await driver.elementById('com.example.app:id/login_button').click();

    // Assert that login was successful and home screen is displayed
    await driver.waitForElementById('com.example.app:id/home_screen', 5000);

    // Navigate to form screen
    await driver.elementById('com.example.app:id/form_button').click();

    // Assert that form screen is displayed
    await driver.waitForElementById('com.example.app:id/form_screen', 5000);

    // Fill out the form with complete personal data
    await driver.elementById('com.example.app:id/first_name').sendKeys('John');
    await driver.elementById('com.example.app:id/last_name').sendKeys('Doe');
    await driver.elementById('com.example.app:id/email').sendKeys('john.doe@example.com');
    await driver.elementById('com.example.app:id/phone').sendKeys('1234567890');
    await driver.elementById('com.example.app:id/address').sendKeys('123 Main St, Anytown, USA');

    // Submit the form
    await driver.elementById('com.example.app:id/submit_button').click();

    // Assert that the form was submitted successfully
    await driver.waitForElementById('com.example.app:id/success_message', 5000);
    const successMessageElement = await driver.elementById('com.example.app:id/success_message');
    const successMessageText = await successMessageElement.text();
    expect(successMessageText).to.equal('Form submitted successfully');
  });
});