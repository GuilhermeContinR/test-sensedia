import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
// import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

import Reducers from './reducers/';

const persistConfig = {
  key: 'root', // Chave para ler
  storage,
  whitelist: ['usuario'], // lista de reducers que mantem , sem a whitelist mantem todos.
};

const pReducer = persistReducer(persistConfig, Reducers);

const store = createStore(pReducer);
const persistor = persistStore(store);

export { store, persistor };
