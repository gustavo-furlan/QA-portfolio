import http from 'k6/http';
import { check, sleep } from 'k6';

// Test configuration
export const options = {
  stages: [
    { duration: '1m', target: 200 },
    { duration: '4m', target: 500 },
  ],
  thresholds: {
    http_req_duration: ['p(95)<2000'],
    http_req_failed: ['rate<0.01'],
  },
};

// Mock API endpoint
const BASE_URL = 'https://youtube.com';

function randomBirthDate() {
  const start = new Date(1950, 0, 1);
  const end = new Date(2005, 11, 31);
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
    .toISOString().split('T')[0];
}

function randomDocumentId() {
  return Math.floor(Math.random() * 900000000 + 100000000).toString();
}

function randomPhone() {
  return `+1${Math.floor(Math.random() * 9000000000 + 1000000000)}`;
}

export default function () {
  // GET request
  const getResponse = http.get(`${BASE_URL}/users`);
  check(getResponse, {
    'GET status is 200': (r) => r.status === 200,
  });

  // POST request with additional user data
  const payload = JSON.stringify({
    name: 'Test User',
    email: 'test@example.com',
    address: {
      street: '123 Test Street',
      city: 'Test City',
      state: 'TS',
      zipCode: '12345',
      country: 'Test Country'
    },
    phone: randomPhone(),
    documentId: randomDocumentId(),
    birthDate: randomBirthDate(),
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const postResponse = http.post(`${BASE_URL}/users`, payload, params);
  check(postResponse, {
    'POST status is 201': (r) => r.status === 201,
  });
}