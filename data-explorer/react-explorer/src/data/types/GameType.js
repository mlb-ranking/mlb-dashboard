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
} from 'graphql';

import TeamType from '../types/TeamType';
// import StatType from '../types/StatType';

const GameType = new ObjectType({
  name: 'Game',
  fields: {
    date: { type: StringType },
    time: { type: StringType },
    id: { type: IntType },
    location: { type: StringType },
    awayTeam: { type: TeamType },
    homeTeam: { type: TeamType },
  },
});

export default GameType;
