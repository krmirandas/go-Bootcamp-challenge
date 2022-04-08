/* eslint-disable indent */
/**
 * HTTP Server Settings
 * (sails.config.http)
 *
 * Configuration for the underlying HTTP server in Sails.
 * (for additional recommended settings, see `config/env/production.js`)
 *
 * For more information on configuration, check out:
 * https://sailsjs.com/config/http
 */
const crypto = require('crypto');
const skipper = require('skipper');

module.exports.http = {
  /****************************************************************************
   *                                                                           *
   * Sails/Express middleware to run for every HTTP request.                   *
   * (Only applies to HTTP requests -- not virtual WebSocket requests.)        *
   *                                                                           *
   * https://sailsjs.com/documentation/concepts/middleware                     *
   *                                                                           *
   ****************************************************************************/

  middleware: {
    /***************************************************************************
     *                                                                          *
     * The order in which middleware should be run for HTTP requests.           *
     * (This Sails app's routes are handled by the "router" middleware below.)  *
     *                                                                          *
     ***************************************************************************/

    order: [
      'rawParser',
      'myRequestLogger',
      '$custom',
      'router'
    ],

    rawParser: (function ()
    {
      return function (req, res, next)
      {
        return skipper({
          limit: 10000000,
          parameterLimit: 10000,
          strict: true
        })(req, res, next);
      };
    })(),


    myRequestLogger: function (req, res, next)
    {
      const log = sails.hooks.ohmylog.log('config:http');
      const id = crypto
        .randomBytes(6)
        .toString('hex')
        .slice(0, 5);

      req.reqId = id;
      log.info(
        '-----------------------------------------------------------------------'
      );
      log.info(
        '[' +
        req.reqId +
        ']   ' +
        (req.method + ' ' + req.path)
      );
      log.info(
        '-----------------------------------------------------------------------'
      );
      log.info('Arguments in body:', req.body);
      return next();
    }
  }
};
