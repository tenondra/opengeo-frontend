import { gql } from '@apollo/client';

/*
 * Subscriptions used in background to sync data between backend and frontend
 * */

gql`
  subscription LobbyStateSync($lobbyId: String!) {
    lobby: lobbyUpdate(lobbyId: $lobbyId) {
      id: lobbyId
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

gql`
  subscription LobbyPlayerStateSync($playerId: String!) {
    lobbyPlayer: lobbyPlayerUpdate(playerId: $playerId) {
      state
      id: playerId
      lobby {
        id
      }
    }
  }
`;
