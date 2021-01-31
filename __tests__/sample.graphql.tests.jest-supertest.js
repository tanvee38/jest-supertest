jest.setTimeout(30000);

// Easy to start resource with graphql api testing
// https://graphqlzero.almansi.me/
// https://graphqlzero.almansi.me/api
// https://thenewstack.io/automatic-testing-for-graphql-apis/

const request = require('supertest')('https://graphqlzero.almansi.me');

describe(`GraphQL API Tests with Supertest`, () => {
  test('GraphQL Simple test', async () => {
    const res = await request.post('/api').send({
      query: "{post(id: 1) {id, title, body}}"
    });

    console.log(res.body);

    expect(res.body.data.post.title).toBe('sunt aut facere repellat provident occaecati excepturi optio reprehenderit');
  });
})