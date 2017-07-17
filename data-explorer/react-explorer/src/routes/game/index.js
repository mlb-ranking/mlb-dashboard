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

  if (errors || !data.game) {
    const error = new Error('Response failed with errors');
    Object.assign(error, errors[0] || {});
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
