const _ = require('lodash');
const chalk = require('chalk');
const Pact = require('bluebird');

module.exports = function (sails, next)
{
  global.Pact = Pact;
  global._ = _;
  global.chalk = chalk;

  return next(null, sails);
};
