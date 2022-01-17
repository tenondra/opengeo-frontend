import { gql } from '@apollo/client';

/*
 * Definition for all queries used by the frontend
 * */

gql`
  query CurrentGuess($playerId: ID!, $locationId: ID!) {
    currentGuess(playerId: $playerId, locationId: $locationId) {
      guessEnd
      guessStart
      id
    }
  }
`;

gql`
  query PlayerInfo($id: ID!) {
    player(id: $id) {
      name
      id
    }
  }
`;

gql`
  query RandomLocations($count: Int, $minDensity: Int, $maxDensity: Int) {
    randomLocation(count: $count, minDensity: $minDensity, maxDensity: $maxDensity) {
      latitude
      longitude
      populationDensity
    }
  }
`;

gql`
  query LobbyPlayer($id: ID!) {
    lobbyPlayer(id: $id) {
      id
      state
      player {
        id
      }
      lobby {
        id
      }
    }
  }
`;

gql`
  query LobbyDetail($lobbyId: ID!) {
    lobby(id: $lobbyId) {
      id
      name
      state
      lobbyGame {
        id
      }
      lobbyPlayers {
        player {
          id
          name
        }
        state
      }
      owner {
        name
        id
      }
    }
  }
`;

gql`
  query OpenLobbyList($from: DateTime!) {
    lobbyList(state: "open", created_Gt: $from) {
      id
      owner {
        name
        id
      }
      lobbyPlayers {
        player {
          id
        }
      }
      name
      state
    }
  }
`;

gql`
  query Results($locationId: ID!, $lobbyGameId: ID!) {
    results(locationId: $locationId, lobbyGameId: $lobbyGameId) {
      location {
        latitude
        longitude
      }
      results {
        score
        totalScore
        guess {
          id
          latitude
          longitude
        }
        distance
        lobbyPlayer {
          id
          state
          player {
            id
            name
          }
        }
      }
    }
  }
`;

gql`
  query FinalResults($lobbyId: ID!) {
    finalResults(lobbyId: $lobbyId) {
      lobbyPlayer {
        id
        state
        player {
          id
          name
        }
      }
      locations {
        id
        latitude
        longitude
      }
      totalScore
      results {
        score
        guess {
          id
          latitude
          longitude
        }
        distance
      }
    }
  }
`;
