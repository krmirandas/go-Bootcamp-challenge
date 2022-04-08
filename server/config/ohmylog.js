/**
 * Custom logger
 */

module.exports.ohmylog = {
  file: {
    level: 'silly',
    filename: 'Wizeline-REST-API',
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: true
  },
  console: {
    level: 'info',
    handleExceptions: true,
    json: true,
    colorize: true
  },
  levels: {
    error: 0,
    warn: 1,
    info: 2,
    debug: 3,
    verbose: 4,
    silly: 5
  },

  exceptionFilename: 'exceptions.log',

  rotate: true,

  folder: 'logs',

  length: 32
};
