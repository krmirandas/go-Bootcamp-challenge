const map = require('lodash/map');
const appRoot = require('path');
const prettyJSON = require('prettyjson');
const DailyRotateFile = require('winston-daily-rotate-file');
const { createLogger, format, transports } = require('winston');
const { combine, label, printf } = format;
const show = printf(({ message, timestamp }) => {
  if (typeof message === 'object') {
    return prettyJSON.render(
      message,
      {
        stringColor: 'gray',
        dashColor: 'magenta',
        numberColor: 'cyan'
      },
      5
    );
  }
  return (
    `${timestamp} ` + `${message}`
  );
});
const showFile = printf(({ message, timestamp }) => {
  if (typeof message === 'object') {
    return prettyJSON.render(
      message,
      {
        noColor: true
      },
      5
    );
  }
  return (
    `${timestamp} ` + `${message}`
  );
});
const formatCombine = (l, show) => {
  return combine(
    label({
      label: l
    }),
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
      tz: 'America/Mexico_City',
      color: 'red'
    }),
    format.prettyPrint(),
    format.colorize(),
    show
  );
};

module.exports = function () {
  const filename = sails.config.ohmylog.file.filename;

  return {
    log: function (l) {
      const drf = new DailyRotateFile({
        filename: appRoot.resolve(
          sails.config.ohmylog.folder,
          `%DATE%${filename}.log`
        ),
        datePattern: 'YYYY-MM-DD_',
        level: sails.config.ohmylog.file.level,
        json: true,
        prettyPrint: true,
        colorize: false
      });
      const logger = createLogger({
        levels: sails.config.ohmylog.levels,
        format: formatCombine(l, showFile),
        transports: [
          new transports.Console({
            showLevel: true,
            level: sails.config.ohmylog.console.level,
            colorize: sails.config.ohmylog.colorize,
            json: true,
            prettyPrint: true,
            format: formatCombine(l, show)
          })
        ]
      });

      logger.add(drf);
      return {
        info: function () {
          map(arguments, argument => {
            logger.log({ level: 'info', message: argument });
          });
        },
        silly: function () {
          map(arguments, argument => {
            logger.log({ level: 'silly', message: argument });
          });
        },
        error: function () {
          map(arguments, argument => {
            logger.log({ level: 'error', message: argument });
          });
        }
      };
    }
  };
};
