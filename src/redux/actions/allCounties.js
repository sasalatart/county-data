import { getCounties } from '../../api';

import {
  SET_PAGE,
  SET_ALL_COUNTIES,
  SET_ALL_COUNTIES_LOADING
} from '../reducer/allCounties';

const setPage = page => {
  return {
    type: SET_PAGE,
    page
  };
};

const setLoading = loading => {
  return {
    type: SET_ALL_COUNTIES_LOADING,
    loading
  };
};

const setAllCounties = ({ currentPage, pages, counties }) => {
  return {
    type: SET_ALL_COUNTIES,
    currentPage,
    pages,
    counties
  };
};

export const fetchAllCounties = page => dispatch => {
  dispatch(setLoading(true));
  getCounties(page).then(response => {
    dispatch(setAllCounties(response));
    dispatch(setLoading(false));
  });

  dispatch(setPage(page));
};
