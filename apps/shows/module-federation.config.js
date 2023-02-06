module.exports = {
  name: 'shows',
  exposes: {
    './Routes': 'apps/shows/src/app/remote-entry/entry.routes.ts',
  },
};
