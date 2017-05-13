import { reset } from 'redux-form';
import { getCounties, findCountiesByName } from '../../api';
import { watchingValues } from '../reducer/countiesIndex';

import {
  CHANGE_WATCHING,
  SET_PAGE,
  SET_PAGE_COUNTIES,
  SET_SEARCH_PAGE,
  SET_SEARCH_PAGE_COUNTIES,
  CLEAR_COUNTY_SEARCH
} from '../reducer/countiesIndex';

export const changeWatching = (selected) => {
  return {
    type: CHANGE_WATCHING,
    selected
  };
};

export const fetchAllCounties = (page) => (dispatch) => {
  getCounties(page).then(({ currentPage, pages, pageCounties }) => {
    dispatch({
      type: SET_PAGE_COUNTIES,
      currentPage,
      pages,
      pageCounties
    });
  });

  dispatch({
    type: SET_PAGE,
    page
  });
};

export const searchByName = (name, page) => (dispatch) => {
  if (name.length < 3) {
    return;
  }

  findCountiesByName(name, page).then(({ currentPage, pages, pageCounties }) => {
    dispatch({
      type: SET_SEARCH_PAGE_COUNTIES,
      currentPageFromSearch: currentPage,
      pagesFromSearch: pages,
      pageCountiesFromSearch: pageCounties
    });
  });

  dispatch(changeWatching(watchingValues.search));

  dispatch({
    type: SET_SEARCH_PAGE,
    currentPageFromSearch: page
  });
};

export const clearCountySearch = () => dispatch => {
  dispatch(reset('countySearch'));
  dispatch({ type: CLEAR_COUNTY_SEARCH });
};
