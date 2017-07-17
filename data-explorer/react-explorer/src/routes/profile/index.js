import React from 'react';
import MaterialAdmin from '../../components/MaterialAdmin';
import PlayerProfile from '../../components/PlayerProfile';
import log from '../../../tools/log';
import { basicQuery } from '../../data/types/PlayerType';

/**
 * Single Player Route
 *
 * @param fetch
 * @param params
 * @returns {Promise.<{chunks: [string], title: string, component: XML}>}
 */
async function action({ fetch, params }) {
  const body = {
    query: basicQuery,
    profileSlug: params.profileSlug,
  };

  const resp = await fetch('/graphql', {
    body: JSON.stringify(body),
  });

  const { data, errors } = await resp.json();
  log.info('profile/index.js: %o', { data, body });

  if (errors) {
    const error = new Error('Response failed with errors');
    Object.assign(error, errors[0] || {});
    throw error;
  }

  if (!data.player) {
    throw new Error('Response failed with errors');
  }

  return {
    chunks: ['profile'],
    title: 'Player Profile',
    component: (
      <MaterialAdmin>
        <PlayerProfile player={data.player} />
      </MaterialAdmin>
    ),
  };
}

export default action;
