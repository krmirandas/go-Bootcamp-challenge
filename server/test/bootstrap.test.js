const sails = require('sails');
const chai = require('chai');
const testModule = process.env.FILE || '*';
const should = require('should');

before(function (done)
{
  this.timeout(90000);

  sails.lift(
    {
      hooks: {
        session: false,
        pubsub: false,
        csrf: false,
        i18n: false,
        blueprints: false,
        orm: false,
        grunt: false
      },
      environment: 'test',
      log: {
        level: 'warn'
      }
    },
    async function (err, sails)
    {
      if (err)
      {
        return done(err);
      }
      global.should = should;
      global.expect = chai.expect;

      return done(null, sails);
    }
  );
});

after(done =>
{
  sails.lower(err =>
  {
    done(err);
  });
});

describe('Linting on ' + testModule, () =>
{
  before(function ()
  {
    if (process.env.NO_LINTER === 'true')
    {
      this.skip();
    }
  });
});
