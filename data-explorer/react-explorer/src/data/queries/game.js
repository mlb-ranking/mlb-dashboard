import fetch from 'isomorphic-fetch';
import { GraphQLList as List } from 'graphql';
import GameLogStatType from '../types/GameLogStatType';
import log from '../../../tools/log';
import MySportsFeedService from '../services/MySportsFeedService';

// Resource Url
const url = MySportsFeedService.gameLogUrl;
const headers = MySportsFeedService.authHeaders;

// Local Storage


// Misc
let gameLogs = [];
let lastFetchTasks = {};
let requests = {};


const game = {
  type: new List(GameLogStatType),
  resolve() {
    // By Player
    url.searchParams.set('team', 'atl');
    url.searchParams.set('player', 'freeman');

    // if(requests[url.href]) {
    //   return requests[url.href];
    // }

    if (lastFetchTasks[url.href]) {
      return lastFetchTasks[url.href];
    }
    lastFetchTasks[url.href] = fetch(url.href, { headers })
      .then(response => response.json())
      .then(data => {
        // log.verbose('DATA: %O', { data, href: url.href});

        if (data.playergamelogs && data.playergamelogs.gamelogs) {
          gameLogs = data.playergamelogs.gamelogs;

          gameLogs = gameLogs.map(gameLog => {
            const newGameLog = Object.assign({}, gameLog);

            newGameLog.stats = Object.entries(gameLog.stats).map(([name, stat]) => {
              return {
                name,
                category: stat['@category'],
                abbreviation: stat['@abbreviation'],
                value: stat['#text'],
              };
            });

            return newGameLog;
          });

          requests[url.href] = gameLogs;
          lastFetchTasks[url.href] = null;
          return requests[url.href];
        }

        throw new Error('No data available', data);
      })
      .catch(err => {
        lastFetchTasks[url.href] = null;
        log.error('Error %O', err);
        throw err;
      });

    if (requests[url.href] && requests[url.href].length) {
      return requests[url.href];
    }

    return lastFetchTasks[url.href];
  },
};

export default game;
