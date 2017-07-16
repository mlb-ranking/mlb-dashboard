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
} from 'graphql';

const PlayerType = new ObjectType({
  name: 'Player',
  fields: {
    Age: { type: IntType },
    BirthCity: { type: StringType },
    BirthCountry: { type: StringType },
    FirstName: { type: StringType },
    Height: { type: StringType },
    ID: { type: IntType },
    IsRookie: { type: BoolType },
    JerseyNumber: { type: IntType },
    LastName: { type: StringType },
    Position: { type: StringType },
    Weight: { type: IntType },
  },
});

export default PlayerType;
