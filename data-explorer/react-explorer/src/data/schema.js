import {
  GraphQLSchema as Schema,
  GraphQLObjectType as ObjectType,
} from 'graphql';

import news from './queries/news';
import players from './queries/players';
import player from './queries/player';
import game from './queries/game';


const schema = new Schema({
  query: new ObjectType({
    name: 'Query',
    fields: {
      news,
      players,
      player,
      game,
    },
  }),
});

export default schema;
