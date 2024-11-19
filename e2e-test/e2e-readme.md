# E2E Tests

This folder contains end-to-end (E2E) tests for the web application using Playwright. The tests are written in JavaScript and follow the Page Object Model (POM) pattern to separate the page elements and actions from the test logic.

## Prerequisites

- Node.js and npm installed
- Playwright installed (`npm install @playwright/test`)

## Page Object Model (POM)

The Page Object Model is a design pattern that helps create an object repository for web UI elements. It enhances test maintenance and reduces code duplication by encapsulating the page elements and actions in separate classes.

### Page Mapping

The page mapping is done in the `e2e-second-test-mapping.spec.js` file. This file contains the `AmazonPage` class, which encapsulates the interactions with the Amazon page.

#### AmazonPage Class

The `AmazonPage` class contains the following elements and actions:

- **Elements**:
  - `usernameInput`: Selector for the username input field
  - `passwordInput`: Selector for the password input field
  - `loginButton`: Selector for the login button
  - `dashboardUrl`: URL of the dashboard after login
  - `searchBox`: Selector for the search box
  - `searchButton`: Selector for the search button
  - `firstProduct`: Selector for the first product in the search results
  - `addToCartButton`: Selector for the add to cart button
  - `cartConfirmationText`: Selector for the cart confirmation text
  - `proceedToCheckoutButton`: Selector for the proceed to checkout button
  - `paymentPageUrl`: URL of the payment page
  - `creditCardNumberInput`: Selector for the credit card number input field
  - `cardHolderNameInput`: Selector for the card holder name input field
  - `cvvInput`: Selector for the CVV input field
  - `paymentContinueButton`: Selector for the payment continue button
  - `paymentAcceptedText`: Selector for the payment accepted text
  - `placeOrderButton`: Selector for the place order button
  - `orderConfirmationText`: Selector for the order confirmation text
  - `addressLine1Input`: Selector for the address line 1 input field
  - `addressLine2Input`: Selector for the address line 2 input field
  - `cityInput`: Selector for the city input field
  - `stateInput`: Selector for the state input field
  - `zipCodeInput`: Selector for the zip code input field

- **Actions**:
  - `login(email, password)`: Logs in with the provided email and password
  - `searchProduct(productName)`: Searches for a product with the provided name
  - `selectFirstProduct()`: Selects the first product in the search results
  - `addToCart()`: Adds the selected product to the cart
  - `proceedToCheckout()`: Proceeds to the checkout page
  - `fillAddress(addressLine1, addressLine2, city, state, zipCode)`: Fills in the address information
  - `fillPaymentInfo(cardNumber, cardHolderName, cvv)`: Fills in the payment information
  - `placeOrder()`: Places the order

## Tests

### 1. `e2e-first-test.spec.js`

This test scenario performs the following steps:

1. **Open Web Application**: Opens the web application.
2. **Log In**: Logs in with the provided username and password.
3. **Navigate to Form Page**: Navigates to a specific form page.
4. **Fill Form**: Fills in the form fields (name, document, complete address).
5. **Save Form**: Saves the form.
6. **Validate Form Submission**: Validates that the form was saved successfully.

### 2. `e2e-second-test.spec.js`

This test scenario performs the following steps:

1. **Open Amazon Website**: Opens the Amazon website.
2. **Log In**: Logs in with the provided email and password.
3. **Search for a Product**: Searches for a product (e.g., laptop).
4. **Select First Product**: Selects the first product in the search results.
5. **Add to Cart**: Adds the selected product to the cart.
6. **Proceed to Checkout**: Proceeds to the checkout page.
7. **Fill Address Information**: Fills in the address information.
8. **Fill Payment Information**: Fills in the payment information (mocked for demonstration).
9. **Place Order**: Places the order (mocked for demonstration).
10. **Validate Order Confirmation**: Validates that the order was placed successfully.