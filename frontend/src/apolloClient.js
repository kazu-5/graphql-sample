import { provideApolloClient } from '@vue/apollo-composable';
import { InMemoryCache } from '@apollo/client/core';
import { HttpLink } from '@apollo/client/link/http';
import { ApolloClient } from '@apollo/client/core';

const httpLink = new HttpLink({
  uri: 'http://localhost:4000/graphql', // GraphQLサーバーのエンドポイント
});

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});

export default function install(app) {
  app.provide(provideApolloClient(apolloClient));
}
