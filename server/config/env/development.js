/**
 * Development environment settings
 * (sails.config.*)
 *
 * What you see below is a quick outline of the built-in settings you need
 * to configure your Sails app for Development.  The configuration in this file
 * is only used in your test environment, i.e. when you lift your app using:
 *
 * ```
 * npm run start:development
 * ```
 */

require('dotenv').config();

module.exports = {
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
    level: 'info',
    noShip: true
  }
};
