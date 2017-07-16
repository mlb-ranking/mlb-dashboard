/* eslint-disable global-require */

// The top-level (parent) route
const routes = {
  path: '/',

  // Keep in mind, routes are evaluated in order
  children: [
    {
      path: '/',
      load: () => import(/* webpackChunkName: 'home' */ './home'),
    },
    {
      path: '/players/:nameOrId',
      load: () => import(/* webpackChunkName: 'player' */ './player'),
    },
    {
      path: '/game/:teamOrPlayer',
      load: () => import(/* webpackChunkName: 'game' */ './game'),
    },
    {
      path: '/player/:first-last-id',
      load: () => import(/* webpackChunkName: 'player' */ './player'),
    },
    {
      path: '/contact',
      load: () => import(/* webpackChunkName: 'contact' */ './contact'),
    },
    {
      path: '/about',
      load: () => import(/* webpackChunkName: 'about' */ './about'),
    },
    {
      path: '/privacy',
      load: () => import(/* webpackChunkName: 'privacy' */ './privacy'),
    },
    {
      path: '/admin',
      load: () => import(/* webpackChunkName: 'admin' */ './admin'),
    },

    // Wildcard routes, e.g. { path: '*', ... } (must go last)
    {
      path: '*',
      load: () => import(/* webpackChunkName: 'not-found' */ './not-found'),
    },
  ],

  async action({ next }) {
    // Execute each child route until one of them return the result
    const route = await next();

    // Provide default values for title, description etc.
    route.title = `${route.title || 'Untitled Page'} - www.reactstarterkit.com`;
    route.description = route.description || '';

    return route;
  },
};

// The error page is available by permanent url for development mode
if (__DEV__) {
  routes.children.unshift({
    path: '/error',
    action: require('./error').default,
  });
}

export default routes;
