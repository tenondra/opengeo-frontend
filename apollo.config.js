module.exports = {
  client: {
    service: {
      includes: ['./src/backendSchema.graphql'],
      name: 'opengeo-graphql',
      url: 'http://localhost:8000/graphql',
    },
    addTypename: true,
    includes: ['./src/backend/*.tsx'],
    excludes: ['./src/backend/model.tsx'],
  },
};
