export const watchingValues = { all: 'all', fav: 'favourites' };
export const CHANGE_WATCHING = 'CHANGE_WATCHING';

const initialState = {
  selected: watchingValues.all
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CHANGE_WATCHING: {
      return {
        ...state,
        selected: action.selected
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
}
