const { test, expect } = require('@playwright/test');

test.describe('API tests', () => {
  let baseUrl = 'https://api.restful-api.dev';
  let ObjectId;

  test.beforeEach(async ({ request }) => {
    ObjectId = await createObjectAndGetId(request);
  });

  async function createObjectAndGetId(request) {
    const postData = {
      "name": "Apple MacBook Pro 16",
      "data": {
        "year": 2019,
        "price": 1849.99,
        "CPU model": "Intel Core i9",
        "Hard disk size": "1 TB"
      }
    };

    const response = await request.post(`${baseUrl}/objects`, {
      data: postData
    });

    // Check status code
    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    return responseBody.id;
  }

  test('GET /objects/:id', async ({ request }) => {
    const response = await request.get(`${baseUrl}/objects/7`);

    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toBe('application/json');

    const expectedBody = {
      "id": `7`,
      "name": "Apple MacBook Pro 16",
      "data": {
        "year": 2019,
        "price": 1849.99,
        "CPU model": "Intel Core i9",
        "Hard disk size": "1 TB"
      }
    };
    const responseBody = await response.json();
    expect(responseBody).toEqual(expectedBody);
  });

  test('POST /objects', async ({ request }) => {
    const postData = {
      "name": "Apple MacBook Pro 16",
      "data": {
        "year": 2019,
        "price": 1849.99,
        "CPU model": "Intel Core i9",
        "Hard disk size": "1 TB"
      }
    };

    const response = await request.post(`${baseUrl}/objects/`, {
      data: postData
    });

    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toBe('text/plain;charset=UTF-8');
  });

  test('PUT /objects/:id', async ({ request }) => {
    const putData = {
      "name": "Apple MacBook Pro 16",
      "data": {
        "year": 2019,
        "price": 2049.99,
        "CPU model": "Intel Core i9",
        "Hard disk size": "1 TB",
        "color": "silver"
      }
    };

    const response = await request.put(`${baseUrl}/objects/${ObjectId}`, {
      data: putData
    });

    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toBe('application/json');

    const expectedBody = {
      "id": `${ObjectId}`,
      "name": "Apple MacBook Pro 16",
      "data": {
        "year": 2019,
        "price": 2049.99,
        "CPU model": "Intel Core i9",
        "Hard disk size": "1 TB",
        "color": "silver"
      },
      "updatedAt": expect.any(String)
    };
    const responseBody = await response.json();
    expect(responseBody).toMatchObject(expectedBody);
  });

  test('DELETE /objects/:id', async ({ request }) => {
    const response = await request.delete(`${baseUrl}/objects/${ObjectId}`);

    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toBe('application/json');

    const expectedBody = { "message": expect.any(String) };
    const responseBody = await response.json();
    expect(responseBody).toEqual(expectedBody);
  });
});