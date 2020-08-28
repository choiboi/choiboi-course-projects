import React from 'react';
import ReactDOM from 'react-dom';
import {
  ApolloClient,
  NormalizedCacheObject,
  ApolloProvider,
  HttpLink,
  gql,
  useQuery
} from '@apollo/client';

import Pages from './pages';
import Login from './pages/login';
import injectStyles from './styles';
import { cache } from './cache';
import { resolvers, typeDefs } from './resolvers';

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  link: new HttpLink({
    uri: 'http://localhost:4000/graphql',
    headers: {
      authorization: localStorage.getItem('token')
    }
  }),
  typeDefs,
  resolvers
});

cache.writeData({
  data: {
    isLoggedIn: !!localStorage.getItem('token'),
    cartItems: []
  }
});

const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;

function isLoggedIn() {
  const { data } = useQuery(IS_LOGGED_IN);
  return data.isLoggedIn ? <Pages /> : <Login />;
}

injectStyles();
ReactDOM.render(
  <ApolloProvider client={client}>
    <Pages />
  </ApolloProvider>,
  document.getElementById('root')
);
