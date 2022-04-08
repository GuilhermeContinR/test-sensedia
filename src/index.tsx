import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/home';
import './styles.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './store';
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <PersistGate loading={null} persistor={persistor}>
        <Home />
      </PersistGate>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
