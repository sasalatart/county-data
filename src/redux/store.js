import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux'
import { logger } from 'redux-logger';
import createHistory from 'history/createBrowserHistory'
import reducer from './reducer';

export const history = createHistory();

const middleware = [thunkMiddleware, routerMiddleware(history)];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(logger);
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
);

export default store;
