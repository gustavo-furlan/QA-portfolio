# Mobile Tests

This folder contains automated tests for the mobile application using Appium. The tests are written in JavaScript and use the `wd` library for interacting with the mobile app.

## Prerequisites

- Node.js and npm installed
- Appium installed globally (`npm install -g appium`)
- Android Emulator or a real Android device set up
- The mobile app APK file available

## Tests

### 1. `first-mobile-test.spec.js`

This test scenario performs the following steps:

1. **Log In**: The user logs in by entering the username and password and clicking the login button.
2. **Navigate to Home Screen**: After a successful login, the user navigates to the home screen.
3. **Navigate to Profile Screen**: The user navigates to the profile screen.
4. **Validate Username**: The test validates the username displayed on the profile screen.

#### Test Steps

- **Log In**:
  - Enter username: `com.example.app:id/username`
  - Enter password: `com.example.app:id/password`
  - Click login button: `com.example.app:id/login_button`

- **Navigate to Home Screen**:
  - Check home screen element: `com.example.app:id/home_screen`

- **Navigate to Profile Screen**:
  - Click profile button: `com.example.app:id/profile_button`

- **Validate Username**:
  - Check profile screen element: `com.example.app:id/profile_screen`
  - Validate username: `com.example.app:id/profile_username`

### 2. `second-mobile-test.spec.js`

This test scenario performs the following steps:

1. **Log In**: The user logs in by entering the username and password and clicking the login button.
2. **Navigate to Form Screen**: After a successful login, the user navigates to the form screen.
3. **Fill Out the Form**: The user fills out the form with complete personal data, including first name, last name, email, phone number, and address.
4. **Submit the Form**: The user submits the form.
5. **Validate Submission**: The test validates that the form was submitted successfully by checking for a success message.

#### Test Steps

- **Log In**:
  - Enter username: `com.example.app:id/username`
  - Enter password: `com.example.app:id/password`
  - Click login button: `com.example.app:id/login_button`

- **Navigate to Form Screen**:
  - Click form button: `com.example.app:id/form_button`

- **Fill Out the Form**:
  - Enter first name: `com.example.app:id/first_name`
  - Enter last name: `com.example.app:id/last_name`
  - Enter email: `com.example.app:id/email`
  - Enter phone number: `com.example.app:id/phone`
  - Enter address: `com.example.app:id/address`

- **Submit the Form**:
  - Click submit button: `com.example.app:id/submit_button`

- **Validate Submission**:
  - Check success message: `com.example.app:id/success_message`

## Running the Tests

1. Start the Appium server:
   ```sh
   appium