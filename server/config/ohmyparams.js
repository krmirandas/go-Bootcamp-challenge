const Joi = require('joi')
  .extend(require('@hapi/joi-date'));

module.exports.ohmyparams = {
  pokemon: Joi.object().keys({
    pokemon: Joi.string()
      .trim()
      .valid('pikachu', 'bulbasaur', 'charizard')
      .required()
  })
};
