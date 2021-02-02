jest.setTimeout(30000);

const {JSONPath} = require('jsonpath-plus');

const baseURL = 'https://localhost:45678';

const request = require('supertest')(baseURL);

describe(`API Tests with Supertest`, () => {
  test('Simple test', async () => {
    const pidm = 943299;

    const response = await request.get(`/student-registration-service/student-registration/by/student/pidm/${pidm}`).trustLocalhost();

    const result = response.body[0];

    expect(response.status).toBe(200);

    expect(result.key.pidm).toBe(943299);
  });
})
