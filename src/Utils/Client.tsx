import { ApolloClient, ApolloProvider, from, fromPromise, split } from '@apollo/client';
import { HttpLink } from '@apollo/client/link/http';
import { RetryLink } from '@apollo/client/link/retry';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';
import { onError } from '@apollo/link-error';
import { loader } from 'graphql.macro';
import { backendUrl, backendWebSocketUrl } from '../backend/settings';
import { cache, loggedInVar, playerIdVar } from './Cache';
import { RefreshTokenDocument, RefreshTokenMutation, RefreshTokenMutationVariables } from '../backend/model';

/*
 * Refreshes the stored JWT cookie using the refresh key
 * */
const refreshJWT = () => {
  const refresh = localStorage.getItem('refresh');
  if (refresh) {
    return client
      .mutate<RefreshTokenMutation, RefreshTokenMutationVariables>({
        mutation: RefreshTokenDocument,
        variables: { token: refresh },
      })
      .then(({ data }) => {
        console.log(data?.refreshToken);
        if ('id' in data?.refreshToken?.payload) {
          playerIdVar(data?.refreshToken?.payload.id);
        }
        return data?.refreshToken;
      });
  }
};

/*
 * Handles apollo client errors
 * */
const onErrorLink = onError(({ graphQLErrors, networkError, forward, operation }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(err => {
      const { message, locations, path } = err;
      console.log(`[GraphQL error]: Message: ${message}`);
      console.log(locations);
      console.log(path);
    });
  if (networkError) {
    if ('statusCode' in networkError) {
      switch (networkError.statusCode) {
        case 401: {
          /* User is unauthorized, try to refresh JWT */
          const promise = refreshJWT();
          if (!promise) {
            loggedInVar(false);
            console.log('No refresh token saved, unable to authenticate.');
            return;
          }
          return fromPromise(promise)
            .filter(v => Boolean(v))
            .flatMap(() => {
              console.log('Logging in with a new token.');
              // Continue
              return forward(operation);
            });
        }
        default: {
          console.log(`[Network error]:`);
          console.log(networkError);
        }
      }
    } else {
      console.log(`[Network error]:`);
      console.log(networkError);
    }
  }
});

// Create a copy to prevent location modification when changing port
const loc = { ...window.location };
let websocketUri: string;
if (loc.protocol === 'https:') {
  websocketUri = 'wss:';
} else {
  websocketUri = 'ws:';
}
if (loc.port === '3000') {
  // In development frontend runs on 3000 and backend on 8000, this sets the correct port
  loc.host = loc.host.replace(loc.port, '8000');
  loc.port = '8000';
}
console.log(loc.host);
websocketUri += '//' + loc.host;
websocketUri += backendWebSocketUrl;

/*
 * Websocket connection for graphql subscriptions
 * */
const wsLink = new WebSocketLink({
  uri: websocketUri,
  options: {
    reconnect: true,
  },
});

/*
 * HTTP link for graphql queries, mutations
 * */
const httpLink = new HttpLink({
  uri: backendUrl,
  credentials: 'include',
});

/*
 * Handles retrying of apollo requests
 * */
const retryLink = new RetryLink({
  delay: {
    initial: 300,
    max: 5000,
    jitter: true,
  },
  attempts: {
    max: 5,
    retryIf: err => !!err,
  },
});

/*
 * Splits the communication for subscriptions (between websocket and http)
 * */
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
  },
  wsLink,
  httpLink
);

/* Helper type definitions of reactive variables in the local cache */
const typeDefs = loader('../appStorage.graphql');

const client = new ApolloClient({
  cache,
  link: from([retryLink, onErrorLink, splitLink]),
  typeDefs,
  // TODO: remove this for production
  connectToDevTools: true,
  // queryDeduplication: true,
  // resolvers: {},
  // disableOffline: true,
  // defaultOptions: defaultOptions
});

/*
 * Wraps children in ApolloProvider using the preconfigured apollo client
 * */
export const CustomApolloClient = ({ children }: { children: JSX.Element }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);
