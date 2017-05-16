export const SET_PAGE = 'SET_PAGE';
export const SET_PAGE_COUNTIES = 'SET_PAGE_COUNTIES';

const initialState = {
  counties: [],
  pages: null,
  currentPage: 1
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
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
