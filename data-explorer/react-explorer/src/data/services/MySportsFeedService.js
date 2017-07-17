import { URL as UrlObject } from 'url';
import base64 from 'base-64';
import { Headers } from 'node-fetch';

const MySportsFeedService = {};

// https://api.mysportsfeeds.complayer_gamelogs.json?team=atl&player=freeman

const BASE_URL = 'https://api.mysportsfeeds.com/';
const BASE_PATH = '/v1.1/pull/mlb/';

function baseUrl() {
    return new UrlObject(BASE_PATH, BASE_URL);
}

const DEFAULT_OPTIONS = {
  season: '2017-regular',
  endpoint: 'active_players.json',
};

const PLAYER_OPTIONS = {
  season: '2017-regular',
  endpoint: 'active_players.json',
};

const GAME_LOG_OPTIONS = {
  season: '2017-regular',
  endpoint: 'player_gamelogs.json',
};

/**
 * Create base url to access mysports feed serivce
 *
 * @param season
 * @param endpoint
 * @returns UrlObject
 */
export function url(opts) {
  const options = Object.assign({}, DEFAULT_OPTIONS, opts);
  const newUrl = baseUrl();
  newUrl.pathname += `${options.season}/${options.endpoint}`;
  return newUrl;
}

const authHeaders = new Headers();
authHeaders.append(
  'Authorization',
  `Basic ${base64.encode('jjjr1122:570309118Five')}`,
);

export default {
  gameLogUrl: url(GAME_LOG_OPTIONS),
  playerUrl: url(PLAYER_OPTIONS),
  authHeaders,
}



// // query:
// //     '{players{Age, BirthCity, BirthCountry, FirstName, ID, IsRookie, JerseyNumber, LastName, Position, Weight}}'
//
// class Game {
//
//     async byPlayer(player) {
//         const href = url({player}).href;
//         return fetch(href);
//     }
//
//     byTeam(team) {
//         return url({team});
//     }
// }
//
// Object.assign(Game, {
//     byPlayer: (player) => url({player}),
//     byTeam: (team) => url({team}),
//
//
//
//     const resp = await fetch('/graphql', {
//     body: JSON.stringify(body),
// });
//
// const players = await Game.byPlayer('freeman');
//
// export default {
//     Game,
// }
//
