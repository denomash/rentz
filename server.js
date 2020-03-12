import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';

import {
  ApolloServer,
  makeExecutableSchema,
  GraphQLUpload
} from 'apollo-server';

import typeDefs from './schema';
import resolvers from './resolvers';
import models from './models';

// Put together a schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

// Initialize the app
const app = express();

app.use(morgan('dev'));

const server = new ApolloServer({
  cors: {
    origin: '*', // <- allow request from all domains
    credentials: true
  },
  schema,
  context: { models }
});

models.sequelize.sync().then(() => {
  server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
});
