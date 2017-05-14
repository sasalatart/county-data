import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import allCounties from './allCounties';
import search from './search';

export default combineReducers({
  allCounties,
  search,
  form
});
