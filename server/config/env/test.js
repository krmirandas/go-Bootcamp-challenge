/**
 * Test environment settings
 * (sails.config.*)
 *
 * What you see below is a quick outline of the built-in settings you need
 * to configure your Sails app for test.  The configuration in this file
 * is only used in your test environment, i.e. when you lift your app using:
 *
 * ```
 * NODE_ENV=test node app
 * ```
 */

require('dotenv').config();

module.exports = {
  connection: 'test',

  models: {
    /***************************************************************************
     *
     * Here the migration of the base is configurable.                          *
     * migrate: 'safe' -> never auto-migrate my database(s).                    *                                                                           *
     * I will do it myself, by hand.                                            *
     * migrate: 'alter' ->  auto-migrate columns/fields, but attempt            *
     * to keep my existing data                                                 *
     * migrate: 'drop' ->  wipe/drop ALL my data and rebuild models every time  *
     ***************************************************************************/
    migrate: 'drop',
    connection: 'test'
  },

  /***************************************************************************
   *                                                                          *
   * Configure your security settings for test.                         *
   *                                                                          *
   * IMPORTANT:                                                               *
   * If web browsers will be communicating with your app, be sure that        *
   * you have CSRF protection enabled.  To do that, set `csrf: true` over     *
   * in the `config/security.js` file (not here), so that CSRF app can be     *
   * tested with CSRF protection turned on in development mode too.           *
   *                                                                          *
   ***************************************************************************/
  security: {
    csrf: false,
    cors: {
      origin: '*',
      allRoutes: true,
      allowRequestMethods: 'GET, POST, PUT, DELETE, OPTIONS, HEAD, PATCH',
      allowRequestHeaders:
        'Content-Type, Authorization, User-Authorization, auth-token',
      allowOrigins: '*',
      allowCredentials: {
        credentials: false
      }
    }
  },

  log: {
    level: 'silly'
  },

  port: 1337,

  connections: {
    test: {
      database: process.env.DB_NAME || 'technical_test',
      user: process.env.DB_USER || 'krmirandas',
      password: process.env.DB_PASSWORD || 1234,
      port: 5432,
      dialect: 'postgres',
      options: {
        dialect: 'postgres',
        host: process.env.DB_NETWORK,
        port: 5432,
        logging: false
      }
    }
  }
};
