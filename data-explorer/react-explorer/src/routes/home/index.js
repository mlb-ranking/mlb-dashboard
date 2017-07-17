import React from 'react';
import Home from './Home';
import MaterialAdmin from '../../components/MaterialAdmin';

async function action({ fetch }) {
  const resp = await fetch('/graphql', {
    body: JSON.stringify({
      query: '{news{title,link,content}}',
    }),
  });
  const { data } = await resp.json();

  if (!data || !data.news) throw new Error('Failed to load the news feed.');

  return {
    chunks: ['home'],
    title: 'React Starter Kit',
    component: (
      <MaterialAdmin>
        <Home news={data.news} />
      </MaterialAdmin>
    ),
  };
}

export default action;
