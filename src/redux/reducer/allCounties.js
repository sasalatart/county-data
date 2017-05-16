export const SET_PAGE = 'SET_PAGE';
export const SET_ALL_COUNTIES = 'SET_ALL_COUNTIES';
export const SET_ALL_COUNTIES_LOADING = 'SET_ALL_COUNTIES_LOADING';

const initialState = {
  counties: [],
  pages: null,
  currentPage: 1,
  loading: true
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_PAGE: {
      return {
        ...state,
        page: action.page
      };
    }
    case SET_ALL_COUNTIES: {
      return {
        ...state,
        currentPage: action.currentPage,
        pages: action.pages,
        counties: action.counties
      }
    }
    case SET_ALL_COUNTIES_LOADING: {
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
