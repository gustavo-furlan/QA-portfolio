const { test, expect } = require('@playwright/test');
const { FormPage } = require('../page-mapping/e2e-first-test-mapping.spec');

test.describe('E2E Test', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://example.com');
    await formPage.login('your-username', 'your-password');
    await expect(page).toHaveURL(formPage.dashboardUrl);
  });

  test('should log in, navigate to form, fill and save', async ({ page }) => {
    const formPage = new FormPage(page);
    
    await formPage.navigateToFormPage();
    await expect(page).toHaveURL(formPage.formPageUrl);
    await formPage.fillForm('John Doe', '123456789', '123 Main St, Anytown, USA');
    await formPage.saveForm();
    await expect(page).toHaveText(formPage.successMessage);
  });
});