import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { logger } from 'redux-logger';
import reducer from './reducer';

const middleware = [thunkMiddleware];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(logger);
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
);

export default store;
