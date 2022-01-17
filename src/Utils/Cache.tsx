import { InMemoryCache, makeVar, TypePolicies } from '@apollo/client';
import { Scalars } from '../backend/model';
import { ThemeTypings } from '@chakra-ui/styled-system';

/* Reactive apollo variables used for state management */

export const playerIdVar = makeVar<Scalars['ID'] | undefined>(undefined);
export const lobbyIdVar = makeVar<Scalars['ID'] | undefined>(undefined);
export const gameIdVar = makeVar<Scalars['ID'] | undefined>(undefined);
export const locationIdVar = makeVar<Scalars['ID'] | undefined>(undefined);
export const guessIdVar = makeVar<Scalars['ID'] | undefined>(undefined);
export const updateCacheHelperVar = makeVar<Scalars['Boolean']>(false);
export const loggedInVar = makeVar<boolean>(false);
export const roundNumberVar = makeVar<number>(0);
export const colorSchemeVar = makeVar<ThemeTypings['colorSchemes']>('teal');

/* These reactive variables can be used in queries without having to pass them as variables */

const typePolicies: TypePolicies = {
  Query: {
    fields: {
      playerId() {
        return playerIdVar();
      },
      lobbyId() {
        return lobbyIdVar();
      },
      gameId() {
        return gameIdVar();
      },
      locationId() {
        return locationIdVar();
      },
      guessId() {
        return guessIdVar();
      },
    },
  },
};

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies,
});
