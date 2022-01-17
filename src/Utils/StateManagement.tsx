import {
  GameStateDocument,
  GameStateQuery,
  GameStateQueryVariables,
  Guess,
  GuessStateDocument,
  GuessStateQuery,
  GuessStateQueryVariables,
  Lobby,
  LobbyGame,
  LobbyPlayer,
  LobbyPlayerStateDocument,
  LobbyPlayerStateQuery,
  LobbyPlayerStateQueryVariables,
  LobbyStateDocument,
  LobbyStateQuery,
  LobbyStateQueryVariables,
  Location,
  LocationStateDocument,
  LocationStateQuery,
  LocationStateQueryVariables,
  Player,
  PlayerStateDocument,
  PlayerStateQuery,
  PlayerStateQueryVariables,
} from '../backend/model';
import { useEffect, useState } from 'react';
import { useApolloClient, useReactiveVar } from '@apollo/client';
import {
  gameIdVar,
  guessIdVar,
  lobbyIdVar,
  locationIdVar,
  playerIdVar,
  roundNumberVar,
  updateCacheHelperVar,
} from './Cache';

type StateData = [
  boolean,
  {
    player: Player | undefined;
    lobbyPlayer: LobbyPlayer | undefined;
    lobby: Lobby | undefined;
    game: LobbyGame | undefined;
    location: Location | undefined;
    guess: Guess | undefined;
    refetch: () => void;
  }
];

/*
 * React hook that automatically loads all information from the cache or backend
 * */
export default function useStateData(): StateData {
  const [loading, setLoading] = useState(true);
  const [player, setPlayer] = useState<Player | undefined>();
  const [lobbyPlayer, setLobbyPlayer] = useState<LobbyPlayer | undefined>();
  const [lobby, setLobby] = useState<Lobby | undefined>();
  const [game, setGame] = useState<LobbyGame | undefined>();
  const [location, setLocation] = useState<Location | undefined>();
  const [guess, setGuess] = useState<Guess | undefined>();
  const [refetchState, setRefetchState] = useState(false);
  const playerId = useReactiveVar(playerIdVar);
  const lobbyId = useReactiveVar(lobbyIdVar);
  const gameId = useReactiveVar(gameIdVar);
  const locationId = useReactiveVar(locationIdVar);
  const guessId = useReactiveVar(guessIdVar);
  const updateCacheHelper = useReactiveVar(updateCacheHelperVar);
  const client = useApolloClient();

  function refetch() {
    setRefetchState(!refetchState);
  }

  useEffect(() => {
    (async () => {
      console.log('FETCHING DATA - ' + playerId?.toString());
      if (!playerId) {
        setLoading(false);
        setLobbyPlayer(undefined);
        console.log('NO PLAYER');
        return;
      }
      // Player loading
      const playerData = await client.query<PlayerStateQuery, PlayerStateQueryVariables>({
        query: PlayerStateDocument,
        fetchPolicy: 'cache-first',
      });
      if (!playerData.data?.playerState?.id) {
        setLoading(false);
        return;
      }
      setPlayer(playerData.data.playerState);
      // Lobby player loading
      const lobbyPlayerData = await client.query<LobbyPlayerStateQuery, LobbyPlayerStateQueryVariables>({
        query: LobbyPlayerStateDocument,
        fetchPolicy: 'cache-first',
      });
      console.log(lobbyPlayerData.data);
      if (!lobbyPlayerData.data?.lobbyPlayerState?.id) {
        setLoading(false);
        return;
      }
      setLobbyPlayer(lobbyPlayerData.data.lobbyPlayerState);
      lobbyIdVar(lobbyPlayerData.data.lobbyPlayerState.lobby?.id?.toString());
      if (!lobbyPlayerData.data.lobbyPlayerState.lobby?.id) {
        setLoading(false);
        return;
      }
      // Lobby loading
      const lobbyData = await client.query<LobbyStateQuery, LobbyStateQueryVariables>({
        query: LobbyStateDocument,
        fetchPolicy: 'cache-first',
      });
      setLobby(lobbyData.data.lobbyState ?? undefined);
      console.log(lobbyData.data.lobbyState);
      if (!lobbyData.data?.lobbyState) {
        lobbyIdVar(undefined);
        setLoading(false);
        return;
      }
      gameIdVar(lobbyData.data.lobbyState.lobbyGame?.id);

      // Game loading
      if (!lobbyData.data.lobbyState.lobbyGame?.id) {
        setLoading(false);
        return;
      }
      console.log(gameId);
      const gameData = await client.query<GameStateQuery, GameStateQueryVariables>({
        query: GameStateDocument,
        fetchPolicy: 'cache-first',
      });
      console.log(gameData);
      setGame(gameData.data.gameState ?? undefined);

      // Location loading
      const locationData = await client.query<LocationStateQuery, LocationStateQueryVariables>({
        query: LocationStateDocument,
        fetchPolicy: 'cache-first',
      });
      setLocation(locationData.data.locationState?.location ?? undefined);
      locationIdVar(locationData.data.locationState?.location?.id);
      if (!locationData.data.locationState?.location?.id) {
        setLoading(false);
        return;
      }
      roundNumberVar(locationData.data.locationState.roundNumber ?? 0);

      // Guess loading
      const guessData = await client.query<GuessStateQuery, GuessStateQueryVariables>({
        query: GuessStateDocument,
        fetchPolicy: 'cache-first',
      });
      console.log(guessData);
      setGuess(guessData.data.guessState ?? undefined);
      guessIdVar(guessData.data?.guessState?.id);
      setLoading(false);
    })();
  }, [client, playerId, lobbyId, gameId, locationId, guessId, refetchState, updateCacheHelper]);

  return [loading, { refetch, player, lobbyPlayer, lobby, game, location, guess }];
}
