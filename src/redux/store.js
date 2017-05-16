import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import { logger } from 'redux-logger';
import createHistory from 'history/createBrowserHistory';
import throttle from 'lodash/throttle';
import reducer from './reducer';
import { saveState, loadState } from './localStorage';

export const history = createHistory();

const middleware = [thunkMiddleware, routerMiddleware(history)];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(logger);
}

const persistedState = loadState();
const store = createStore(
  reducer,
  persistedState,
  applyMiddleware(...middleware)
);

store.subscribe(throttle(() => {
  const { currentCounty, favouriteCounties } = store.getState();
  saveState({ currentCounty, favouriteCounties });
}), 1000);

export default store;
