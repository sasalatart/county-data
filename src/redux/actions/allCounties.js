import { getCounties } from '../../api';

import {
  CHANGE_WATCHING,
  SET_PAGE,
  SET_PAGE_COUNTIES,
} from '../reducer/allCounties';

export const changeWatching = selected => {
  return {
    type: CHANGE_WATCHING,
    selected
  };
};

export const fetchAllCounties = page => dispatch => {
  getCounties(page).then(({ currentPage, pages, counties }) => {
    dispatch({
      type: SET_PAGE_COUNTIES,
      currentPage,
      pages,
      counties
    });
  });

  dispatch({
    type: SET_PAGE,
    page
  });
};
