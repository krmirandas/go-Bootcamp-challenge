const LOG = sails.hooks.ohmylog.log('Controller:Main');
const axios = require('axios');

module.exports = {
  getGretting(req, res)
  {
    LOG.info('Accessing to the endpoint which display "Hello, World."');

    try
    {
      return res.ok('Hello World!');
    } catch (error)
    {
      return res.negotiate(error);
    }
  },

  async getPokemon(req, res)
  {
    LOG.info('Accessing to the endpoint to get information about pokemons "');
    const baseURI = 'https://pokeapi.co/api/v2/pokemon';
    const { params } = req;

    console.log(params);

    try
    {
      const pokemon = await axios.get(baseURI + '/' + params.pokemon);

      return res.ok(pokemon.data);
    } catch (error)
    {
      return res.negotiate(error);
    }
  }
};
