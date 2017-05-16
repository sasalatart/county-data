export const SET_COUNTY = 'SET_COUNTY';
export const SET_CURRENT_COUNTY_LOADING = 'SET_CURRENT_COUNTY_LOADING';

const initialState = {
  loading: true
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_COUNTY: {
      return {
        ...action.county
      };
    }
    case SET_CURRENT_COUNTY_LOADING: {
      return {
        ...state,
        loading: action.loading
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
}
