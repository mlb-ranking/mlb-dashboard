import { URL } from 'url';
import fetch from 'isomorphic-fetch';
import { GraphQLList as List } from 'graphql';
import CumulativePlayerStatType from '../types/CumulativePlayerStatType';
import log from '../../../tools/log';

const baseUrl = 'https://api.mysportsfeeds.com/';
const path = '/v1.1/sample/pull/mlb/2016-2016-regular/active_players.json';
const url = new URL(path, baseUrl);

const playersStorage = {};
const lastFetchTasks = {};

let playersData;
// const lastFetchTime = new Date(1970, 0, 1);
// const disableCache = true;

/**
 * Get the name from the request
 *
 * @param request
 * @returns {string}
 * @throws Error
 */
function getNameQuery(request) {
  if (!request.body.name) {
    throw new Error('No player name found in request');
  }

  return request.body.name;
}

/**
 * Get an id from the request
 *
 * @param request
 * @returns {integer}
 * @throws Error
 */
function getIdQuery(request) {
  if (!request.body.id) {
    throw new Error('No player id found in request');
  }

  return request.body.id;
}

/**
 * Cache expiration
 *
 * @returns {boolean}
 */
function cacheMiss() {
  return true;
}

/**
 *
 * @param data
 * @returns {boolean}
 * @throws Error
 */
function hasValidPlayers(data) {
  if (!data.activeplayers || !Array.isArray(data.activeplayers.playerentry)) {
    throw new Error('No Player Entries');
  }

  if (!data.activeplayers.playerentry[0]) {
    throw new Error('Player not found');
  }

  return true;
}

const player = {
  type: new List(CumulativePlayerStatType),
  resolve({ request }) {
    // Create the proper url
    if (request.body.name) {
      url.searchParams.set('player', getNameQuery(request));
    } else {
      url.searchParams.set('id', getIdQuery(request));
    }

    // Last request didn't finish
    if (lastFetchTasks[url.href]) {
      return lastFetchTasks[url.href];
    }

    // Make a real request
    if (cacheMiss(url, request)) {
      lastFetchTasks[url.href] = fetch(url.href)
        .then(response => response.json())
        .then(data => {
          hasValidPlayers(data);

          playersData = data.activeplayers.playerentry.map(
            playerEntry => playerEntry.player,
          );

          log.info('PlayersData: \n\n %O', playersData);

          playersStorage[url.href] = playersData;
          lastFetchTasks[url.href] = null;
          return playersData;
        })
        .catch(err => {
          lastFetchTasks[url.href] = null;
          log.error('Error', err);
          throw err;
        });

      // If we have already resolved at this point
      if (playersStorage[url.href] && playersStorage[url.href].Age) {
        return playersStorage[url.href];
      }

      return lastFetchTasks[url.href];
    }

    // Retrieve from cache
    if (playersStorage[url.href]) {
      return playersStorage[url.href];
    }

    throw new Error('Failed to query for this player');
  },
};

export default player;
