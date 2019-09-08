import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createUploadLink } from 'apollo-upload-client';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';

const HTTP_HOST = 'http://ubereats-backend.jgu3pdgbri.us-west-2.elasticbeanstalk.com/';

const httpLink = new createUploadLink({
  uri: HTTP_HOST,
});

const AuthLink = (operation, next) => {
  const token = localStorage.getItem('jwt');
  if (token) {
    operation.setContext(context => ({
      ...context,
      headers: {
        ...context.headers,
        Authorization: token,
      },
    }));
  }
  return next(operation);
};

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors) {
        graphQLErrors.map(({ message, locations, path, extensions }) => {
          if (extensions.code === 'UNAUTHENTICATED') {
            localStorage.removeItem('jwt');
            client.resetStore()
          }
          console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`);
        });
        if (networkError) {
          console.log(`[Network error]: ${networkError}`);
        }
      }
    }),
    AuthLink,
    httpLink,
  ]),
  cache,
});

export default client;