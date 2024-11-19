# QA-portfolio

Simple Portfolio showing the tests I currently work with / study.

## Types of Tests in this repository

This repository contains various types of automated tests, including:

1. **API Tests**: Automated tests for validating the backend services and API endpoints.
2. **E2E Tests**: End-to-end tests for validating the user flows and interactions in the web application.
3. **Mobile Tests**: Automated tests for validating the functionality of the mobile application.
4. **Load Tests**: Performance tests for evaluating the application's behavior under load.

## CI/CD Pipeline

This repository includes a GitLab CI/CD pipeline configuration file (`.gitlab-ci.yml`) to automate the execution of tests after each commit. The pipeline is designed to run the API, E2E, and Mobile tests in an automated way.

### .gitlab-ci.yml

The `.gitlab-ci.yml` file defines the stages and jobs for the CI/CD pipeline.

### Pipeline Stages

1. Install: Installs the project dependencies.
2. Test: Runs the API, E2E, and Mobile tests.

### Jobs

install_dependencies: Installs the project dependencies using npm install.
api_tests: Runs the API tests using Playwright and saves the report as an artifact.
e2e_tests: Runs the E2E tests using Playwright and saves the report as an artifact.
mobile_tests: Runs the mobile tests using Appium. It uses the mcr.microsoft.com/playwright:v1.16.3-focal Docker image, starts the Appium service, and runs the mobile test script.

## Running the Tests locally

### API Tests

1. Navigate to the API-test folder in your terminal.
2. Run the tests:
```
npx playwright test teste.spec.js
```

### E2E Tests
1. Navigate to the e2e-test folder in your terminal.
2. Run the tests:
```
npx playwright test e2e-first-test.spec.js
npx playwright test e2e-second-test.spec.js
```

### Mobile Tests
1. Start the Appium server:
```
appium
```

2. Navigate to the mobile-test folder in your terminal.
3. Run the tests:

```
node first-mobile-test.spec.js
node second-mobile-test.spec.js
```

### Load Tests
1. Navigate to the k6-loadtest folder in your terminal.
2. Run the load test:
```
k6 run loadtest.js
```