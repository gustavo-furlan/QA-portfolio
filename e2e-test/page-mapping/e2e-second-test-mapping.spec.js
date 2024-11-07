class AmazonPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = 'input[name="email"]';
    this.passwordInput = 'input[name="password"]';
    this.loginButton = 'input#signInSubmit';
    this.dashboardUrl = 'https://www.amazon.com';
    this.searchBox = '#twotabsearchtextbox';
    this.searchButton = 'input#nav-search-submit-button';
    this.firstProduct = '.s-main-slot .s-result-item h2 a';
    this.addToCartButton = '#add-to-cart-button';
    this.cartConfirmationText = '#huc-v2-order-row-confirm-text';
    this.proceedToCheckoutButton = '#hlb-ptc-btn-native';
    this.paymentPageUrl = /.*\/gp\/buy\/spc\/handlers\/display.html.*/;
    this.creditCardNumberInput = 'input[name="addCreditCardNumber"]';
    this.cardHolderNameInput = 'input[name="ppw-accountHolderName"]';
    this.cvvInput = 'input[name="addCreditCardVerificationNumber"]';
    this.paymentContinueButton = 'input[name="ppw-widgetEvent:SetPaymentPlanSelectContinueEvent"]';
    this.paymentAcceptedText = '.a-alert-heading';
    this.placeOrderButton = 'input[name="placeYourOrder1"]';
    this.orderConfirmationText = '.a-box-inner h1';
    this.addressLine1Input = 'input[name="addressLine1"]';
    this.addressLine2Input = 'input[name="addressLine2"]';
    this.cityInput = 'input[name="city"]';
    this.stateInput = 'input[name="state"]';
    this.zipCodeInput = 'input[name="zipCode"]';
  }

  async login(email, password) {
    await this.page.fill(this.usernameInput, email);
    await this.page.click('input#continue');
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }

  async searchProduct(productName) {
    await this.page.fill(this.searchBox, productName);
    await this.page.click(this.searchButton);
  }

  async selectFirstProduct() {
    await this.page.click(this.firstProduct);
  }

  async addToCart() {
    await this.page.click(this.addToCartButton);
  }

  async proceedToCheckout() {
    await this.page.click(this.proceedToCheckoutButton);
  }

  async fillAddress(addressLine1, addressLine2, city, state, zipCode) {
    await this.page.fill(this.addressLine1Input, addressLine1);
    await this.page.fill(this.addressLine2Input, addressLine2);
    await this.page.fill(this.cityInput, city);
    await this.page.fill(this.stateInput, state);
    await this.page.fill(this.zipCodeInput, zipCode);
  }

  async fillPaymentInfo(cardNumber, cardHolderName, cvv) {
    await this.page.fill(this.creditCardNumberInput, cardNumber);
    await this.page.fill(this.cardHolderNameInput, cardHolderName);
    await this.page.fill(this.cvvInput, cvv);
    await this.page.click(this.paymentContinueButton);
  }

  async placeOrder() {
    await this.page.click(this.placeOrderButton);
  }
}

module.exports = { AmazonPage };