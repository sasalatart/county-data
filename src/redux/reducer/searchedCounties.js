export const SET_SEARCHED_PAGE = 'SET_SEARCHED_PAGE';
export const SET_SEARCHED_COUNTIES = 'SET_SEARCHED_COUNTIES';
export const SET_SEARCHED_COUNTIES_LOADING= 'SET_SEARCHED_COUNTIES_LOADING';
export const CLEAR_COUNTY_SEARCH = 'CLEAR_COUNTY_SEARCH';

const initialState = {
  counties: [],
  pages: null,
  currentPage: 1,
  loading: true
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_SEARCHED_PAGE: {
      return {
        ...state,
        searchPage: action.searchPage
      };
    }
    case SET_SEARCHED_COUNTIES: {
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
    case SET_SEARCHED_COUNTIES_LOADING: {
      return {
        ...state,
        loading: action.loading
      };
    }
    default: {
      return { ...state };
    }
  }
}
