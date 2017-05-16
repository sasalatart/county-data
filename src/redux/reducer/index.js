import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import currentCounty from './currentCounty';
import watching from './watching';
import allCounties from './allCounties';
import searchedCounties from './searchedCounties';
import favouriteCounties from './favouriteCounties';

export default combineReducers({
  currentCounty,
  watching,
  allCounties,
  searchedCounties,
  favouriteCounties,
  router: routerReducer,
  form
});
