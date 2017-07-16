import React from 'react';
import Game from './Game';
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
  const body = {
    query:
      '{game{team{ID, Name, Abbreviation}, player{ID, LastName}, game{id}, stats{name}}}',
  };

  const resp = await fetch('/graphql', {
    body: JSON.stringify(body),
  });

  const { data, errors } = await resp.json();
  log.info('game/index.js: %o', data );

  if (errors || !data.game) {
    const error = new Error('Response failed with errors');
    error.message = errors[0] && errors[0].message ? errors[0].message : error.message;
    error.locations = errors[0] && errors[0].locations ? errors[0].locations : error.locations;
    throw error;
  }

  const Games = [data.game];

  return {
    chunks: ['game'],
    title: 'Game',
    component: (
      <Layout>
        {Games.map(game => <Game key={game.toString()} game={game}/>)}
      </Layout>
    ),
  };
}

export default action;
