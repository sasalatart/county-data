export const watchingValues = { all: 'all', fav: 'favourites', search: 'search' };
export const CHANGE_WATCHING = 'CHANGE_WATCHING';
export const SET_PAGE = 'SET_PAGE';
export const SET_PAGE_COUNTIES = 'SET_PAGE_COUNTIES';

const initialState = {
  selected: watchingValues.all,
  counties: [],
  pages: null,
  currentPage: 1
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CHANGE_WATCHING: {
      return {
        ...state,
        selected: action.selected
      };
    }
    case SET_PAGE: {
      return {
        ...state,
        page: action.page
      };
    }
    case SET_PAGE_COUNTIES: {
      return {
        ...state,
        currentPage: action.currentPage,
        pages: action.pages,
        counties: action.counties
      }
    }
    default: {
      return { ...state };
    }
  }
}
