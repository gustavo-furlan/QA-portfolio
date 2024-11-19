# API Tests

This folder contains automated API tests for the application using Playwright. The tests are written in JavaScript and use the `@playwright/test` framework to perform HTTP requests and validate responses.

## Prerequisites

- Node.js and npm installed
- Playwright installed (`npm install @playwright/test`)

## Tests

### 1. `teste.spec.js`

This test file contains multiple test scenarios for the API endpoints. Below are the details of each test:

#### Test: `GET /objects/:id`

- **Description**: This test sends a GET request to retrieve an object by its ID and validates the response.
- **Steps**:
  1. Send a GET request to `/objects/:id`.
  2. Validate the status code is 200.
  3. Validate the `Content-Type` header is `application/json`.
  4. Validate the response body matches the expected object structure.

#### Test: `POST /objects`

- **Description**: This test sends a POST request to create a new object and validates the response.
- **Steps**:
  1. Send a POST request to `/objects` with the object data.
  2. Validate the status code is 201.
  3. Validate the `Content-Type` header is `application/json`.
  4. Validate the response body matches the expected object structure, including the `createdAt` field.

#### Test: `PUT /objects/:id`

- **Description**: This test sends a PUT request to update an existing object by its ID and validates the response.
- **Steps**:
  1. Send a PUT request to `/objects/:id` with the updated object data.
  2. Validate the status code is 200.
  3. Validate the `Content-Type` header is `application/json`.
  4. Validate the response body matches the expected updated object structure, including the `updatedAt` field.

#### Test: `DELETE /objects/:id`

- **Description**: This test sends a DELETE request to delete an object by its ID and validates the response.
- **Steps**:
  1. Send a DELETE request to `/objects/:id`.
  2. Validate the status code is 200.
  3. Validate the `Content-Type` header is `application/json`.
  4. Validate the response body contains the expected deletion message.
