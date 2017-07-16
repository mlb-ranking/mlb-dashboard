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

const StatType = new ObjectType({
  name: 'Stat',
  fields: {
    abbreviation: { type: StringType },
    category: { type: StringType },
    name: { type: StringType },
    value: { type: StringType },
  },
});

export default StatType;
