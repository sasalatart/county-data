import {
  ADD_COUNTY_TO_FAVOURITES,
  REMOVE_COUNTY_FROM_FAVOURITES
} from '../reducer/favouriteCounties';

export const addToFavourites = county => {
  const { _id, state, fipsCode, name } = county;
  return {
    type: ADD_COUNTY_TO_FAVOURITES,
    county: { _id, state, fipsCode, name }
  };
};

export const removeFromFavourites = _id => {
  return {
    type: REMOVE_COUNTY_FROM_FAVOURITES,
    _id
  };
};
