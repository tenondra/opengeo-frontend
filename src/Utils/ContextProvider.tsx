import { useApolloClient, useReactiveVar } from '@apollo/client';
import { Context, useEffect, useState } from 'react';
import useLocalStorageState from 'use-local-storage-state';
import {
  LobbyPlayerModelStateEnum,
  Scalars,
  useLobbyPlayerStateSyncSubscription,
  useLobbyStateSyncSubscription,
  usePlayerInfoQuery,
} from '../backend/model';
import { colorSchemeVar, lobbyIdVar, playerIdVar, updateCacheHelperVar } from './Cache';
import { writeToCache } from './CacheTools';
import { ThemeTypings } from '@chakra-ui/styled-system';

/*
 * Manages the data context of the application (provides a data context to child elements)
 * */
export default function ContextProvider({ children, context }: { children: JSX.Element; context: Context<any> }) {
  const [storedPlayerId, setStoredPlayerId] = useLocalStorageState<Scalars['ID']>('playerId');
  const colorScheme = useReactiveVar(colorSchemeVar);
  const [savedColorScheme, setSavedColorScheme] = useLocalStorageState<ThemeTypings['colorSchemes']>('colorScheme');
  const [loaded, setLoaded] = useState(false);
  const [colorLoaded, setColorLoaded] = useState(false);

  const playerId = useReactiveVar(playerIdVar);
  const lobbyId = useReactiveVar(lobbyIdVar);
  const updateCacheHelper = useReactiveVar(updateCacheHelperVar);
  const client = useApolloClient();

  const { data, loading } = usePlayerInfoQuery({
    variables: { id: storedPlayerId ?? '-1' },
  });
  const sub = useLobbyPlayerStateSyncSubscription({
    variables: { playerId: playerId ?? '-1' },
  });
  const lobbySub = useLobbyStateSyncSubscription({
    variables: { lobbyId: lobbyId ?? '-1' },
  });

  const lobbyPlayerData = sub.data?.lobbyPlayer;
  const lobbyData = lobbySub.data?.lobby;

  useEffect(() => {
    // lobbyPlayer subscription update callback
    if (lobbyPlayerData?.id && lobbyPlayerData?.state) {
      writeToCache(client, {
        state: lobbyPlayerData.state.toString() as LobbyPlayerModelStateEnum,
        id: parseInt(lobbyPlayerData.id),
        lobby: lobbyPlayerData.lobby,
        __typename: 'LobbyPlayer',
      });
      updateCacheHelperVar(!updateCacheHelper);
    }
  }, [lobbyPlayerData]);

  useEffect(() => {
    // lobby subscription update callback
    if (lobbyData?.id) {
      console.log(lobbyData);
      writeToCache(client, {
        ...lobbyData,
        __typename: 'Lobby',
        id: parseInt(lobbyData.id),
      });
      updateCacheHelperVar(!updateCacheHelper);
    }
  }, [lobbyData]);

  useEffect(() => {
    // Initial playerId loading from LocalStorage
    if (!loading && !loaded && !data?.player) {
      setStoredPlayerId.reset();
      setLoaded(true);
    }
    if (!loaded && (data?.player?.id || !storedPlayerId)) {
      playerIdVar(data?.player?.id);
      setLoaded(true);
    }
  }, [loaded, data, storedPlayerId]);

  useEffect(() => {
    // local storage update when state changes
    if (playerId !== storedPlayerId && loaded) {
      setStoredPlayerId(playerId);
    }
  }, [playerId, storedPlayerId, setStoredPlayerId, loaded]);

  useEffect(() => {
    if (colorScheme && colorScheme != savedColorScheme) {
      setSavedColorScheme(colorScheme);
    }
    if (!colorLoaded) {
      colorSchemeVar(savedColorScheme ?? 'teal');
      setColorLoaded(true);
    }
  }, [savedColorScheme, colorScheme, colorLoaded]);

  return <context.Provider value={{}}>{children}</context.Provider>;
}
