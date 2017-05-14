export const GET_COUNTY = 'GET_COUNTY';

export default function reducer(state = {}, action) {
  switch(action.type) {
    case GET_COUNTY: {
      return {
        ...action.county
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
}
