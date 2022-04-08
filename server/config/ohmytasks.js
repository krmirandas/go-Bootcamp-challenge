/* eslint-disable global-require */
/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */
const chalk = require('chalk');

module.exports.ohmytasks = {
  onLift: function ()
  {
    const log = sails.hooks.ohmylog.log('');

    log.info(
      chalk.yellow(
        '*****************************************************************'
      )
    );
    log.info(chalk.yellow('Starting server with:\n'));
    log.info(
      chalk.yellow(
        `Environment:  .................. ${sails.config.environment}`
      )
    );
    log.info(
      chalk.yellow(`Port:  ......................... ${sails.config.port}`)
    );
    log.info(
      chalk.yellow(
        '*****************************************************************'
      )
    );
  },

  before: function (sails, cb)
  {

    return cb();
  },

  after: function (sails, cb)
  {
    return cb();
  },

  dirname: 'ohmytasks',
  toDo: [
    {
      tasks: ['global'],
      order: true
    }
  ]
};
