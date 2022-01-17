import { gql } from '@apollo/client';

/*
 * State queries used for "automated" state management
 * Involve using apollo reactive variables and cache
 * */

export const GET_LOBBY_STATE = gql`
  query LobbyState($id: ID!) {
    lobbyId @client @export(as: "id")
    lobbyState: lobby(id: $id) {
      id
      name
      state
      lobbyGame {
        id
        game {
          id
        }
      }
      lobbyPlayers {
        id
        player {
          id
          name
        }
        state
      }
      owner {
        id
        name
      }
    }
  }
`;

export const GET_LOBBY_PLAYER = gql`
  query LobbyPlayerState($id: ID!) {
    playerId @client @export(as: "id")
    lobbyPlayerState: lobbyPlayer(id: $id) {
      id
      lobby {
        id
      }
      state
    }
  }
`;
export const GET_PLAYER = gql`
  query PlayerState($id: ID!) {
    playerId @client @export(as: "id")
    playerState: player(id: $id) {
      id
      name
      lastLogin
    }
  }
`;

export const GET_GAME = gql`
  query GameState($lobbyGameId: ID!) {
    gameId @client @export(as: "lobbyGameId")
    gameState: lobbyGame(id: $lobbyGameId) {
      id
      game {
        id
        name
        timeLimit
        rounds
      }
    }
  }
`;

export const GET_LOCATION = gql`
  query LocationState($lobbyId: ID!, $playerId: ID!) {
    lobbyId @client @export(as: "lobbyId")
    playerId @client @export(as: "playerId")
    locationState: currentLocation(lobbyId: $lobbyId, playerId: $playerId) {
      location {
        id
        latitude
        longitude
        game {
          id
        }
      }
      lobbyGame {
        id
      }
      roundNumber
    }
  }
`;

export const GET_GUESS = gql`
  query GuessState($playerId: ID!, $locationId: ID!) {
    playerId @client @export(as: "playerId")
    locationId @client @export(as: "locationId")
    guessState: currentGuess(playerId: $playerId, locationId: $locationId) {
      guessEnd
      guessStart
      id
    }
  }
`;
