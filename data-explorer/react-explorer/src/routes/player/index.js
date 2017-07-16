import React from 'react';
import Player from './Player';
import Layout from '../../components/Layout';
import log from '../../../tools/log';

/**
 * Single Player Route
 *
 * @param fetch
 * @param params
 * @returns {Promise.<{chunks: [string], title: string, component: XML}>}
 */
async function action({ fetch, params }) {
  // @TODO: query: '{player{Age: "10", LastName, FirstName}}',
  const body = {
    query:
      '{players{Age, BirthCity, BirthCountry, FirstName, ID, IsRookie, JerseyNumber, LastName, Position, Weight}}',
  };

  body[Number.isInteger(params.nameOrId) ? 'id' : 'name'] = params.nameOrId;

  const resp = await fetch('/graphql', {
    body: JSON.stringify(body),
  });

  const { data, errors } = await resp.json();
  log.info('player/index.js \n\n %O', { data, errors, body });

  if (errors) {
    log.error(errors);
    throw new Error('Response failed with errors');
  }

  if (!data || (!data.player && !data.players)) {
    log.error('Data: \n\n %O', { data, errors });
    throw new Error('Failed to load the player data.');
  }

  const players = data.players ? data.players : [];
  if (data.player) players.push(data.player);
  log.info(players.length);

  return {
    chunks: ['player'],
    title: 'Player',
    component: (
      <Layout>
        {players.map(player => <Player key={player.ID} player={player} />)}
      </Layout>
    ),
  };
}

export default action;
