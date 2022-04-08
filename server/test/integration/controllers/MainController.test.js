const request = require('supertest');

describe('\n\n______________________ Main Controller ______________________', () =>
{
  describe('Get /api/greet', function ()
  {
    it('should display Hello World -> /api/greet', async function ()
    {
      return request(sails.hooks.http.app)
        .get('/api/greet')
        .expect(200)
        .then(({ body }) =>
        {
          console.log(body);
        });
    });
  });

  describe('Get /api/pokemon/:pokemon', function ()
  {
    it('should display information of a pokemon-> /api/pokemon/:pokemon', async function ()
    {
      return request(sails.hooks.http.app)
        .get('/api/pokemon/bulbasaur')
        .expect(200)
        .then(({ body }) =>
        {
          console.log(body);
        });
    });

    it('should display information of a pokemon-> /api/pokemon/:pokemon', async function ()
    {
      return request(sails.hooks.http.app)
        .get('/api/pokemon/miau')
        .expect(400)
        .then(({ body }) =>
        {
          console.log(body);
        });
    });
  });
});
