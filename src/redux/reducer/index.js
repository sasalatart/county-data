import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
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
  form
});
