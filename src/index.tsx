import { ColorModeScript } from '@chakra-ui/react';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faAddressBook,
  faAngleDoubleUp,
  faAngleLeft,
  faAngleRight,
  faExpandAlt,
  faFolderPlus,
  faMapMarkedAlt,
  faMapMarkerAlt,
  faSignOutAlt,
  faStreetView,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import { CustomApolloClient } from './Utils/Client';

/*
 * Fontawesome icons
 * */
library.add(
  faMapMarkedAlt,
  faMapMarkerAlt,
  faAngleLeft,
  faAngleRight,
  faStreetView,
  faExpandAlt,
  faAngleDoubleUp,
  faUser,
  faFolderPlus,
  faAddressBook,
  faSignOutAlt
);

ReactDOM.render(
  <StrictMode>
    <ColorModeScript />
    <CustomApolloClient>
      <App />
    </CustomApolloClient>
  </StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
