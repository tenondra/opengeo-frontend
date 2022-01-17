import { ChakraProvider, theme } from '@chakra-ui/react';
import { createContext } from 'react';
import { CookiesProvider } from 'react-cookie';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AfterGamePage from './AfterGamePage/AfterGamePage';
import GamePage from './GamePage/GamePage';
import LobbyDetailPage from './LobbyDetailPage/LobbyDetailPage';
import LobbySelectPage from './LobbySelectPage/LobbySelectPage';
import StartingPage from './StartingPage/StartingPage';
import ContextProvider from './Utils/ContextProvider';
import { BASENAME, PATHS } from './Utils/Utils';
import FinalResultsPage from './FinalResultsPage/FinalResultsPage';
import StateBasedRouteSwitcher from './Components/StateBasedRouteSwitcher';
import { DynamicColorMode } from './Components/DynamicColorMode';

const Context = createContext({});

function App() {
  return (
    <CookiesProvider>
      <ChakraProvider theme={theme}>
        <DynamicColorMode>
          <ContextProvider context={Context}>
            <Router basename={BASENAME}>
              <StateBasedRouteSwitcher>
                {/* Changes the app path based on player state */}
                <Switch>
                  {/* Changes the active component based on app path */}
                  <Route exact path={PATHS.LobbySelectPage} component={LobbySelectPage} />
                  <Route exact path={PATHS.LobbyPage} component={LobbyDetailPage} />
                  <Route exact path={PATHS.GamePage} component={GamePage} />
                  <Route exact path={PATHS.StartingPage} component={StartingPage} />
                  <Route exact path={PATHS.AfterGamePage} component={AfterGamePage} />
                  <Route exact path={PATHS.FinalResultsPage} component={FinalResultsPage} />
                </Switch>
              </StateBasedRouteSwitcher>
            </Router>
          </ContextProvider>
        </DynamicColorMode>
      </ChakraProvider>
    </CookiesProvider>
  );
}

export default App;
