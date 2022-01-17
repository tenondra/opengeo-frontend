import { DocumentNode } from 'graphql';
import { Maybe } from 'graphql/jsutils/Maybe';
import { Guess, Lobby, LobbyGame, LobbyPlayer } from '../backend/model';
import { GET_GAME, GET_LOBBY_PLAYER, GET_LOBBY_STATE } from '../backend/stateQuery';
import { ApolloClient } from '@apollo/client';

export type CacheUpdateType =
  | ({ __typename?: 'LobbyPlayer' } & Pick<LobbyPlayer, 'id' | 'state' | 'lobby'>)
  | ({ __typename?: 'Lobby' } & Pick<Lobby, 'id' | 'name' | 'lobbyGame'>)
  | ({ __typename?: 'LobbyGame' } & Pick<LobbyGame, 'id' | 'game'>);

/*
 * Writes data to client's cache based on corresponding stateQueries
 * */
export const writeToCache = (client: ApolloClient<any>, data: Maybe<CacheUpdateType> | undefined) => {
  if (!data) return;
  let query: DocumentNode | undefined = undefined;
  let cache_data: any;
  switch (data.__typename) {
    case 'Lobby': {
      query = GET_LOBBY_STATE;
      cache_data = {
        lobbyState: data,
      };
      break;
    }
    case 'LobbyPlayer': {
      query = GET_LOBBY_PLAYER;
      cache_data = {
        lobbyPlayerState: data,
      };
      break;
    }
    case 'LobbyGame': {
      query = GET_GAME;
      cache_data = {
        gameState: data,
      };
      break;
    }
  }
  if (query) {
    console.log(data);
    client.writeQuery({
      query: query,
      data: cache_data,
      variables: {
        id: data.id?.toString(),
      },
    });
  }
};

export enum CacheDataType {
  Lobby = 'Lobby',
  LobbyPlayer = 'LobbyPlayer',
  Guess = 'Guess',
}

/*
 * Removes an entry from the cache of the client
 * */
export const deleteFromCache = (client: ApolloClient<any>, data: Lobby | LobbyPlayer | Guess) => {
  console.log(`Removing ${data.__typename}:${data.id}`);
  client.cache.evict({
    id: client.cache.identify(data),
  });
  client.cache.gc();
};
