   ```

# K6 Load Test

This folder contains load tests for the application using K6. The tests are written in JavaScript and executed using the K6 load testing tool.

## Prerequisites

- K6 installed on your machine. You can download and install K6 from [here](https://k6.io/docs/getting-started/installation/).

## Test Scenario

The load test scenario is designed to simulate multiple users accessing the application simultaneously. The test script performs the following steps:

1. **Setup**: Initializes the test environment and sets up any required data.
2. **Load Test**: Simulates multiple users performing actions on the application, such as logging in, navigating through pages, and submitting forms.
3. **Teardown**: Cleans up any data or resources used during the test.

## Test Script

The test script is located in the `k6-loadtest` folder and is named `loadtest.js`. Below is an example of what the script might look like:

```javascript
import http from 'k6/http';
import { check, sleep } from 'k6';
import { Counter } from 'k6/metrics';

export const requests = new Counter('http_reqs');

export const options = {
  stages: [
    { duration: '30s', target: 20 }, // Ramp-up to 20 users over 30 seconds
    { duration: '1m', target: 20 },  // Stay at 20 users for 1 minute
    { duration: '30s', target: 0 },  // Ramp-down to 0 users over 30 seconds
  ],
};

export default function () {
  const res = http.get('https://example.com'); // Replace with your application's URL
  check(res, {
    'is status 200': (r) => r.status === 200,
  });
  sleep(1);
}