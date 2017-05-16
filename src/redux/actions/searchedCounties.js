import { reset } from 'redux-form';
import { changeWatching } from './watching';
import { findCountiesByName } from '../../api';
import { watchingValues } from '../reducer/watching';

import {
  SET_SEARCHED_PAGE,
  SET_SEARCHED_COUNTIES,
  SET_SEARCHED_COUNTIES_LOADING,
  CLEAR_COUNTY_SEARCH
} from '../reducer/searchedCounties';

const setSearchedPage = page => {
  return {
    type: SET_SEARCHED_PAGE,
    currentPage: page
  };
};

const setLoading = loading => {
  return {
    type: SET_SEARCHED_COUNTIES_LOADING,
    loading
  };
};

const setSearchedCounties = ({ currentPage, pages, counties }) => {
  return {
    type: SET_SEARCHED_COUNTIES,
    currentPage,
    pages,
    counties
  };
};

export const searchByName = (page, name) => (dispatch) => {
  if (name.length === 0) {
    dispatch({ type: CLEAR_COUNTY_SEARCH });
    dispatch(changeWatching(watchingValues.all));
    return;
  }

  dispatch(setLoading(true));
  findCountiesByName(page, name).then(response => {
    dispatch(setSearchedCounties(response));
    dispatch(setLoading(false));
  });

  dispatch(setSearchedPage(page));
  dispatch(changeWatching(watchingValues.search));
};

export const clearCountySearch = () => dispatch => {
  dispatch(reset('countySearch'));
  dispatch({ type: CLEAR_COUNTY_SEARCH });
};
