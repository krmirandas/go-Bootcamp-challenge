const forEach = require('lodash/forEach');
const LOG = sails.hooks.ohmylog.log('policies:validateParams');
const _validationOptions = {
  abortEarly: false,
  allowUnknown: true,
  stripUnknown: true
};

module.exports = (req, res, next) =>
{
  if (req.options.params)
  {
    const _schema = _.get(sails.config.ohmyparams, req.options.params);

    if (_schema)
    {
      return Pact.resolve()
        .then(() => _schema.validate(req.params, _validationOptions))
        .then(({ value, error }) =>
        {
          if (error)
          {
            let errors = [];

            forEach(error.details, ({ path, type, message }) =>
            {
              LOG.error(path);
              LOG.error(type);
              LOG.error(message);
              errors = [...errors, message];
            });

            return res.negotiate('pokemon must be one of[pikachu, bulbasaur, charizard]');
          }

          req.params = value;

          return next();
        });
    }
  }

  return next();
};
