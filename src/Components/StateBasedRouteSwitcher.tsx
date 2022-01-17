import useStateData from '../Utils/StateManagement';
import { Redirect, useLocation } from 'react-router-dom';
import usePlayerStateBasedRoute from '../Utils/PlayerStateBasedRoute';
import { Loading } from '../Utils/Utils';
import { playerIdVar } from '../Utils/Cache';

export default function StateBasedRouteSwitcher({ children }: { children: JSX.Element }) {
  const [stateLoading, stateData] = useStateData();
  const { lobbyPlayer } = stateData;

  const location = useLocation();
  const desiredApplicationPath = usePlayerStateBasedRoute(lobbyPlayer);
  console.log(lobbyPlayer);
  console.log(playerIdVar());
  // Automatic redirection based on player state
  if (stateLoading) {
    return <Loading />;
  } else if (!stateLoading && desiredApplicationPath !== location.pathname) {
    return <Redirect to={desiredApplicationPath} />;
  }
  return children;
}
