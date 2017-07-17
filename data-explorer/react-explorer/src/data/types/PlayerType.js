import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLInt as IntType,
  GraphQLBoolean as BoolType,
} from 'graphql';

import TeamType from './TeamType';

import { snakeToCamelAndLowerCaseFirst } from '../formatters';

const PlayerType = new ObjectType({
  name: 'Player',
  fields: {
    activeSw: { type: StringType },
    age: { type: IntType },
    bats: { type: StringType }, // enum
    birthCity: { type: StringType },
    birthCountry: { type: StringType },
    birthState: { type: StringType },
    college: { type: StringType },
    currentTeam: { type: TeamType },
    firstName: { type: StringType },
    fullName: { type: StringType },
    height: { type: StringType }, // by units
    highSchool: { type: StringType },
    id: { type: IntType },
    isRookie: { type: BoolType },
    jerseyNumber: { type: IntType },
    lastName: { type: StringType },
    league: { type: StringType }, // enum
    position: { type: StringType },
    proDebutdate: { type: StringType },
    serviceYears: { type: IntType },
    throws: { type: StringType }, // enum
    weight: { type: IntType },
  },
});

export function mlbPlayerFormatter(playerData) {
  // Manual stuff first
  const formatted = {
    firstName: playerData.name_first,
    lastName: playerData.name_last,
    fullName: playerData.name_display_first_last,
    currentTeam: {
      abbreviation: playerData.team_code,
      name: playerData.team_full,
    },
  };

  return snakeToCamelAndLowerCaseFirst(Object.assign(formatted, playerData));
}

export function mySportsFormatter(playerData) {
  // Manual stuff first
  const formatted = {
    fullName: `${playerData.FirstName} ${playerData.LastName}`,
  };

  return snakeToCamelAndLowerCaseFirst(Object.assign(formatted, playerData));
}

export const basicQuery =
  '{player{firstName, lastName, birthState, weight, fullName, currentTeam{name, abbreviation}}}';

export default PlayerType;
