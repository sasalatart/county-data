import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import countiesIndex from './countiesIndex';

export default combineReducers({
  countiesIndex,
  form
});
