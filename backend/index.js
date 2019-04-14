const { Prisma } = require('prisma-binding');
const { ApolloServer } = require('apollo-server');
const { importSchema } = require('graphql-import');

const typeDefs = importSchema('./src/schema.graphql');
const Query = require('./src/Query');
const Mutation = require('./src/Mutation');

const db = new Prisma({
  typeDefs: './generated/prisma.graphql',
  endpoint: 'https://us1.prisma.sh/prisma-tutorial/prisma-graphql-tutorial/dev',
  secret: 'currentlyDrinkingPhilzCoffee'
});

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Mutation,
    Query
  },
  context: ({ req }) => ({
    ...req,
    db
  })
})

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
});