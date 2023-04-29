const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./src/graphql/schema'); // ここでインポート
const cors = require('cors');

const app = express();
app.use(cors());


app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  }),
);

app.use(
  cors({
    origin: 'http://localhost:8080', // クライアントアプリケーションのオリジンを許可
  })
);


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
