import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import allCounties from './allCounties';
import search from './search';
import currentCounty from './currentCounty';
import favourites from './favourites';

export default combineReducers({
  allCounties,
  search,
  currentCounty,
  favourites,
  form
});
