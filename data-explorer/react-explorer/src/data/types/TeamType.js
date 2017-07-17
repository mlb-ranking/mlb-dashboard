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

const TeamType = new ObjectType({
  name: 'Team',
  fields: {
    abbreviation: { type: StringType },
    city: { type: StringType },
    id: { type: IntType },
    lastUpdatedOn: { type: StringType },
    name: { type: StringType },
  },
});

export default TeamType;
