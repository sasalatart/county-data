export const SET_SEARCH_PAGE = 'SET_SEARCH_PAGE';
export const SET_SEARCH_PAGE_COUNTIES = 'SET_SEARCH_PAGE_COUNTIES';
export const CLEAR_COUNTY_SEARCH = 'CLEAR_COUNTY_SEARCH';

const initialState = {
  counties: [],
  pages: null,
  currentPage: 1
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_SEARCH_PAGE: {
      return {
        ...state,
        searchPage: action.searchPage
      };
    }
    case SET_SEARCH_PAGE_COUNTIES: {
      return {
        ...state,
        currentPage: action.currentPage,
        pages: action.pages,
        counties: action.counties
      };
    }
    case CLEAR_COUNTY_SEARCH: {
      return {
        ...state,
        currentPage: 1,
        pages: null,
        counties: []
      };
    }
    default: {
      return { ...state };
    }
  }
}
