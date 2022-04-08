# TECHNICAL CHALLENGE

## API endpoints.

### Display Hello World
The first endpoint will be used to display a simple Hello World

### Request:
```GET /api/greet```
### Body:
``` 
Hello World!
```

### Get info of a pokemon
The first endpoint required name of a pokemon as param.
At the moment there are only 3 of Ash's pokemon available for query: 'pikachu', 'bulbasaur', 'charizard'.

### Request:
```GET /api/pokemon/:pokemon```
### Body:
``` 
{
  abilities: [
    { ability: [Object], is_hidden: false, slot: 1 },
    { ability: [Object], is_hidden: true, slot: 3 }
  ],
  base_experience: 64,
  forms: [
    {
      name: 'bulbasaur',
      url: 'https://pokeapi.co/api/v2/pokemon-form/1/'
    }
  ],
  game_indices: [
    { game_index: 153, version: [Object] }
  ],
  height: 7,
  held_items: [],
  id: 1,
  is_default: true,
  location_area_encounters: 'https://pokeapi.co/api/v2/pokemon/1/encounters',
  moves: [
    { move: [Object], version_group_details: [Array] },
  ],
  name: 'bulbasaur',
  order: 1,
  past_types: [],
  species: {
    name: 'bulbasaur',
    url: 'https://pokeapi.co/api/v2/pokemon-species/1/'
  },
  sprites: {
    back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
    back_female: null,
    back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png',
    back_shiny_female: null,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    front_female: null,
    front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png',
    front_shiny_female: null,
    other: {
      dream_world: [Object],
      home: [Object],
      'official-artwork': [Object]
    },
    versions: {
      'generation-i': [Object],
      'generation-ii': [Object],
      'generation-iii': [Object]
    }
  },
  stats: [
    { base_stat: 45, effort: 0, stat: [Object] },
  ],
  types: [ { slot: 1, type: [Object] }, { slot: 2, type: [Object] } ],
  weight: 69
}

```

In case a parameter is invalid
``` 
"pokemon must be one of[pikachu, bulbasaur, charizard]"
```

If you try to access a non-existing path by mistake, the following message is displayed
``` 
{
  "name": "ErrorHandler",
  "code_string": "notFound",
  "message": "routeNotFound",
  "errors": [],
  "details": []
}
```

## Choosed technologies and requirements

| Technology | Version                                                                      | Release date      |
| ---------- | ---------------------------------------------------------------------------- | ----------------- |
| NodeJs     | [`16.13.0`](https://nodejs.org/en/blog/release/v16.13.0/)                    | October 26, 2021  |
| SailsJS    | [`1.2.5`](https://github.com/balderdashy/sails/releases/tag/v1.2.5)          | August 20, 2020   |

## How to install

* Install the lastes version of NodeJs from: <a href="https://nodejs.org/en/"><strong> Install NodeJs </strong></a>
* Install npm with the command:

```
 npm install npm -g
```

* Install sails with the command:

```
 npm install sails@1.2.5 -g
```
## How to use the project

* In a terminal, go to "server" directory
* Write command:

```
 nvm use
```

To use the node version of the project specified in the .nvmrc file. In case it is not installed type the following command

```
 nvm install 16.13.0
```

* Install the dependencies with

```
 npm i
```

* Copy the .env.example file to create .env with the credentials you will use. (DB_USER, DB_PASSWORD)

* Lift the project:

```
  sails lift
```

Once the server is lifted, you can access through postman or browser like 
http://localhost:1337/api/pokemon/pikachu or http://localhost:1337/api/greet

## Unit test

To run all the unit tests, execute the following command:

```
  npm run test:all
```

## Notes  

* I decided to use Sails because it is a more complete framework than Express (with models, views, controllers, routes, database access, etc.) and it is still built on top of Express so if you use Sails you use Express.
* There are two environments, one for unit testing and one for development.
* Implemented a function to log the response of the enpoints. These logs are stored in the logs folder at the root of the project.
* The pokemon endpoint input is validated through middleware.
* The framework used for unit testing is Mocha.js.

## Know Issues

*  The style of the messages in the response is not homologated.