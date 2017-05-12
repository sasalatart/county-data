import { getCounties } from '../../api';

import {
  CHANGE_WATCHING,
  SET_PAGE,
  SET_PAGE_COUNTIES
} from '../reducer/countiesIndex';

export const changeWatching = (selected) => {
  return {
    type: CHANGE_WATCHING,
    selected
  };
};

export const setPage = (page) => (dispatch) => {
  getCounties(page).then(({ currentPage, pages, pageCounties }) => {
    dispatch({
      type: SET_PAGE_COUNTIES,
      currentPage,
      pages,
      pageCounties
    });
  });

  return {
    type: SET_PAGE,
    page
  };
};
