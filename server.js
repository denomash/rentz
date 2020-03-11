import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import graphqlHTTP from 'express-graphql';
import path from 'path';
// import schema from './schema';

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

// Allow cros origin
app.use(cors());

app.use(
  '/graphql',
  graphqlHTTP({
    schema: null,
    graphiql: true
  })
);

app.use(express.static('public'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
