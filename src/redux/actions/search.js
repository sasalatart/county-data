import { reset } from 'redux-form';
import { changeWatching } from './allCounties';
import { findCountiesByName } from '../../api';
import { watchingValues } from '../reducer/allCounties';

import {
  SET_SEARCH_PAGE,
  SET_SEARCH_PAGE_COUNTIES,
  CLEAR_COUNTY_SEARCH
} from '../reducer/search';

export const searchByName = (page, name) => (dispatch) => {
  if (name.length === 0) {
    return;
  }

  findCountiesByName(page, name).then(({ currentPage, pages, counties }) => {
    dispatch({
      type: SET_SEARCH_PAGE_COUNTIES,
      currentPage,
      pages,
      counties
    });
  });

  dispatch(changeWatching(watchingValues.search));

  dispatch({
    type: SET_SEARCH_PAGE,
    currentPage: page
  });
};

export const clearCountySearch = () => dispatch => {
  dispatch(reset('countySearch'));
  dispatch({ type: CLEAR_COUNTY_SEARCH });
};
