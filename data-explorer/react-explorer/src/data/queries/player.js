import fetch from 'isomorphic-fetch';
import { get } from 'object-path';

import PlayerType from './../types/PlayerType';
import { mlbPlayerFormatter } from '../types/PlayerType';
import { MlbPlayerLookup } from '../../data/services/MlbService';
import log from '../../../tools/log';

function cacheFactory() {
  return {
    responses: new Map(),
    data: new Map(),
  };
}

function getProfileSlug(request) {
  let slug = request.body.profileSlug;
  slug = slug.split('+');
  return slug;
}

const cache = cacheFactory();

const player = {
  type: PlayerType,
  resolve({ request }) {
    // const mlbPlayerLookup = new MlbPlayerLookup().setNames(getProfileSlug(request));
    const mlbPlayerLookup = new MlbPlayerLookup().setNames(getProfileSlug(request));
    const url = mlbPlayerLookup.url.toString();


    // Last request didn't finish
    if (cache.responses.has(url)) {
      return cache.responses.get(url);
    }

    const response = fetch(url);
    cache.responses.set(url, response);

    response
      .then(resp => resp.json())
      .then(data => {
        let playerData = {};
        const queryResults = get(data, 'search_player_all.queryResults', {});
        const numResults = parseInt(get(queryResults, 'totalSize', 0));
        log.verbose('player-onresp: %O', { data, queryResults, numResults, url });

        // No results
        if (numResults === 0) {
          log.error('player-onresp: %O', { data, queryResults, numResults,  });
          console.log(url);
          throw new Error('Path to result does not exist');
        }

        // Exactly one result
        if (numResults === 1) {
          playerData = queryResults.row;
        }

        // Too many just grab the first one
        if (numResults > 1) {
          playerData = queryResults.row[0];
        }

        // Format to the correct type
        playerData = mlbPlayerFormatter(playerData);

        // Cache it
        cache.responses.delete(url);
        cache.data.set(url, playerData);


        return mlbPlayerFormatter(playerData);
      })
      .catch(err => {
        cache.responses.delete(url);
        log.error('Error', err);
        throw err;
      });

    // Last request didn't finish
    if (cache.data.has(url)) {
      return cache.data.get(url);
    }
  },
};

export default player;
