const { test, expect } = require('@playwright/test');
const { AmazonPage } = require('../page-mapping/e2e-second-test-mapping.spec');

test.describe('Amazon Checkout Test', () => {
  test.beforeEach(async ({ page }) => {
    const amazonPage = new AmazonPage(page);
    await page.goto('https://www.amazonmock.com');
    await amazonPage.login('your-email@example.com', 'your-password');
    await expect(page).toHaveURL(amazonPage.dashboardUrl);
  });

  test('should add product to cart, fill address and payment info, and complete purchase', async ({ page }) => {
    const amazonPage = new AmazonPage(page);

    await amazonPage.searchProduct('laptop');
    await amazonPage.selectFirstProduct();
    await amazonPage.addToCart();
    await expect(page).toHaveText(amazonPage.cartConfirmationText, 'Added to Cart');
    
    await amazonPage.proceedToCheckout();

    await amazonPage.fillAddress('123 Main St', 'Apt 4B', 'Anytown', 'NY', '12345');

    await amazonPage.fillPaymentInfo('4111111111111111', 'John Doe', '123');
    await expect(page).toHaveText(amazonPage.paymentAcceptedText, 'Payment method added');

    await amazonPage.placeOrder();
    await expect(page).toHaveText(amazonPage.orderConfirmationText, 'Thank you, your order has been placed.');
  });
});