module.exports = {
  name: 'movies',
  exposes: {
    './Routes': 'apps/movies/src/app/remote-entry/entry.routes.ts',
  },
};
