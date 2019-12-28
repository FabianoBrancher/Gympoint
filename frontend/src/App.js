import './config/reactotronConfig';

import React from 'react';
import { Router } from 'react-router-dom';

import history from './services/history';

import Routes from './routes';

import GlobalStyles from './styles/global';

import { store, persistor } from './store';

import { PersistGate } from 'redux-persist/integration/react';

import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <GlobalStyles />
          <Routes />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
