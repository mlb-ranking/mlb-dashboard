/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLInt as IntType,
  GraphQLBoolean as BoolType,
  GraphQLList as ListType,
} from 'graphql';

import TeamType from '../types/TeamType';
import PlayerType from '../types/PlayerType';
import GameType from '../types/GameType';
import StatType from '../types/StatType';

const GameLogStatType = new ObjectType({
  name: 'GameLogStat',
  fields: {
    lastUpdatedOn: { type: StringType },
    team: { type: TeamType },
    player: { type: PlayerType },
    game: { type: GameType },
    stats: { type: new ListType(StatType) },
  },
});

export default GameLogStatType;
