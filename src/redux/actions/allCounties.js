import { getCounties } from '../../api';

import {
  SET_PAGE,
  SET_PAGE_COUNTIES,
} from '../reducer/allCounties';

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
