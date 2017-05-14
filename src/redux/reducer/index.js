import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import allCounties from './allCounties';
import search from './search';
import currentCounty from './currentCounty';

export default combineReducers({
  allCounties,
  search,
  currentCounty,
  form
});
