export const ADD_COUNTY_TO_FAVOURITES = 'ADD_COUNTY_TO_FAVOURITES';
export const REMOVE_COUNTY_FROM_FAVOURITES = 'REMOVE_COUNTY_FROM_FAVOURITES';

const initialState = {
  counties: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_COUNTY_TO_FAVOURITES: {
      return {
        counties: [...state.counties, action.county]
      };
    }
    case REMOVE_COUNTY_FROM_FAVOURITES: {
      const countyIndex = state.counties.map(({ _id }) => _id).indexOf(action._id);
      return {
        counties: [
          ...state.counties.slice(0, countyIndex),
          ...state.counties.slice(countyIndex + 1)
        ]
      };
    }
    default: {
      return { ...state };
    }
  }
}
