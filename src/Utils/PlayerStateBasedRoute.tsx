import { useEffect, useState } from 'react';
import { LobbyPlayer, LobbyPlayerModelStateEnum } from '../backend/model';
import { PATHS } from './Utils';

/*
 * Returns the target app path based on the user state
 * */
export default function usePlayerStateBasedRoute(lobbyPlayer?: LobbyPlayer) {
  const [page, setPage] = useState('');
  useEffect(() => {
    switch (lobbyPlayer?.state) {
      case LobbyPlayerModelStateEnum.Ready:
      case LobbyPlayerModelStateEnum.Idle:
        setPage(PATHS.LobbyPage);
        break;
      case LobbyPlayerModelStateEnum.InGame:
        setPage(PATHS.GamePage);
        break;
      case LobbyPlayerModelStateEnum.AfterGame:
        setPage(PATHS.FinalResultsPage);
        break;
      case LobbyPlayerModelStateEnum.WaitingNextRound:
        setPage(PATHS.AfterGamePage);
        break;
      case LobbyPlayerModelStateEnum.SearchingLobby:
        setPage(PATHS.LobbySelectPage);
        break;
      case null:
      case undefined:
        // No player or unable to connect
        setPage(PATHS.StartingPage);
        break;
    }
  }, [lobbyPlayer]);

  return page;
}
