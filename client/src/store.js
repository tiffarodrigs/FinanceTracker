import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

import { loadState, saveState } from './sessionStorage';
const persistedState = loadState();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,persistedState,
  composeEnhancers(applyMiddleware(thunk)));
  //,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

  store.subscribe(() => {
    saveState(store.getState().login);
  });

export default store;