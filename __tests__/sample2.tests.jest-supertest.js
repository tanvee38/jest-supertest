jest.setTimeout(30000);

const {JSONPath} = require('jsonpath-plus');

const request = require('supertest')('https://reqres.in');

describe(`API Tests with Supertest`, () => {
  test('Simple test', async () => {
    const response = await request.get(`/api/users?page=2`);

    const result = JSONPath({path: "$..data[?(@.first_name==='Michael')].last_name", json: response.body});

    expect(result[0]).toBe('Lawson');
  });
})