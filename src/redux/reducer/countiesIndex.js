export const watchingValues = { all: 'all', fav: 'favourites', search: 'search' };
export const CHANGE_WATCHING = 'CHANGE_WATCHING';
export const SET_PAGE = 'SET_PAGE';
export const SET_PAGE_COUNTIES = 'SET_PAGE_COUNTIES';
export const SET_SEARCH_PAGE = 'SET_SEARCH_PAGE';
export const SET_SEARCH_PAGE_COUNTIES = 'SET_SEARCH_PAGE_COUNTIES';
export const CLEAR_COUNTY_SEARCH = 'CLEAR_COUNTY_SEARCH';

const initialState = {
  selected: watchingValues.all,
  pageCounties: [],
  pages: null,
  currentPage: 1,
  pageCountiesFromSearch: [],
  pagesFromSearch: null,
  currentPageFromSearch: 1
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
        pageCounties: action.pageCounties
      }
    }
    case SET_SEARCH_PAGE: {
      return {
        ...state,
        searchPage: action.searchPage
      };
    }
    case SET_SEARCH_PAGE_COUNTIES: {
      return {
        ...state,
        currentPageFromSearch: action.currentPageFromSearch,
        pagesFromSearch: action.pagesFromSearch,
        pageCountiesFromSearch: action.pageCountiesFromSearch
      }
    }
    case CLEAR_COUNTY_SEARCH: {
      return {
        ...state,
        selected: watchingValues.all,
        currentPageFromSearch: 1,
        pagesFromSearch: null,
        pageCountiesFromSearch: []
      };
    }
    default: {
      return { ...state };
    }
  }
}
