import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import currentCounty from './currentCounty';
import allCounties from './allCounties';
import searchedCounties from './searchedCounties';
import favouriteCounties from './favouriteCounties';

export default combineReducers({
  currentCounty,
  allCounties,
  searchedCounties,
  favouriteCounties,
  form
});
