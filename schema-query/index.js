const { ApolloServer, gql } = require('apollo-server');
const { importSchema } = require('graphql-import');
const resolvers = require('./resolvers')


// Trabalha os dados para devolver o conteúdo, cada função se refere a uma entrada na API - deve ter o mesmo nome das queries.

const server = new ApolloServer({
  typeDefs: importSchema('./schema/index.graphql'),
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`Listening at ${url}`);
});
