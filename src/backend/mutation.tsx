import { gql } from '@apollo/client';

/*
 * All mutation definitions used by the frontend
 * */

gql`
  mutation RefreshToken($token: String!) {
    refreshToken(token: $token) {
      token
      refreshExpiresIn
      payload
    }
  }
`;

gql`
  mutation Login($playerId: String!, $password: String!) {
    tokenAuth(id: $playerId, password: $password) {
      token
      refreshExpiresIn
    }
  }
`;

gql`
  mutation Register($name: String!, $password: String!) {
    registerPlayer(name: $name, password: $password) {
      ok
      player {
        id
        name
      }
    }
  }
`;

gql`
  mutation Logout {
    deleteTokenCookie {
      ok: deleted
    }
  }
`;

gql`
  mutation LobbyCreate($name: String!, $owner: ID!) {
    lobbyCreate(newLobbymodel: { name: $name, lobbyPlayers: [$owner], owner: $owner }) {
      ok
      lobbymodel {
        id
        owner {
          id
        }
        name
      }
    }
  }
`;

gql`
  mutation LobbyGameCreate($lobbyId: ID!, $gameId: ID!) {
    lobbyGameCreate(newLobbygamemodel: { lobbies: [$lobbyId], game: $gameId }) {
      ok
      lobbygamemodel {
        id
        lobbies {
          id
        }
        game {
          id
        }
      }
    }
  }
`;

gql`
  mutation LobbyPlayerCreate($playerId: ID!, $state: LobbyPlayerModelStateEnumCreate, $lobbyId: ID) {
    lobbyPlayerCreate(newLobbyplayermodel: { player: $playerId, state: $state, lobby: $lobbyId }) {
      ok
      lobbyplayermodel {
        id
        lobby {
          id
        }
        player {
          id
        }
        state
      }
    }
  }
`;

gql`
  mutation GameCreate($name: String, $timeLimit: Int!) {
    gameCreate(newGamemodel: { name: $name, timeLimit: $timeLimit }) {
      errors {
        field
        messages
      }
      ok
      gamemodel {
        id
      }
    }
  }
`;

gql`
  mutation ChangePlayerState($id: ID!, $state: LobbyPlayerModelStateEnumUpdate) {
    lobbyPlayerUpdate(newLobbyplayermodel: { player: $id, state: $state }) {
      ok
      lobbyplayermodel {
        id
        state
        player {
          id
        }
      }
    }
  }
`;

gql`
  mutation LobbyPlayerLeaveLobby($id: ID!) {
    lobbyPlayerUpdate(newLobbyplayermodel: { player: $id, state: SEARCHING_LOBBY, lobby: "" }) {
      ok
      lobbyplayermodel {
        id
        state
        lobby {
          id
        }
        player {
          id
        }
      }
    }
  }
`;

gql`
  mutation LobbyPlayerJoinLobby($id: ID!, $lobbyId: ID!) {
    lobbyPlayerUpdate(newLobbyplayermodel: { player: $id, lobby: $lobbyId, state: IDLE }) {
      lobbyplayermodel {
        id
        player {
          id
        }
        state
      }
    }
  }
`;

gql`
  mutation ChangeLobbyState($id: ID!, $state: LobbyModelStateEnumUpdate) {
    lobbyUpdate(newLobbymodel: { id: $id, state: $state }) {
      ok
      lobbymodel {
        id
        state
        owner {
          id
        }
        lobbyGame {
          id
          game {
            id
          }
        }
      }
    }
  }
`;

gql`
  mutation BulkLocation($locations: [LocationInput]) {
    batchLocationCreate(locations: $locations) {
      locations {
        id
      }
    }
  }
`;

gql`
  mutation CreateGuess($player: ID!, $lobbyGame: ID!) {
    guessCreate(newGuessmodel: { player: $player, location: "", lobbyGame: $lobbyGame }) {
      ok
      guessmodel {
        id
        guessStart
      }
    }
  }
`;

gql`
  mutation FinishGuess($id: ID!, $latitude: Float!, $longitude: Float!, $guessEnd: CustomDateTime!) {
    guessUpdate(newGuessmodel: { id: $id, latitude: $latitude, longitude: $longitude, guessEnd: $guessEnd }) {
      ok
      guessmodel {
        id
        guessStart
        guessEnd
      }
    }
  }
`;
