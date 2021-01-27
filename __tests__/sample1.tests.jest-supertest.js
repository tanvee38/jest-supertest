jest.setTimeout(30000);

const request = require('supertest')('http://jservice.io');

describe(`API Tests with Supertest`, () => {
  test('Should respond with clues in category World Capitals', async () => {
    const response = await request.get(`/api/category?id=78`);
  
    const parsedResponse = JSON.parse(response.req.res.text);
  
    expect(parsedResponse.clues_count).toBe(140);
  });
  
  test('Should respond with clues with values of 100 in category 8', async () => {
    const response = await request.get(`/api/clues?value=100&category=8`);
  
    const parsedResponse = JSON.parse(response.req.res.text);
  
    for (const item of parsedResponse) {
      expect(item.category.clues_count).toBe(35);
    }
  });
})