export const watchingValues = { all: 'all', fav: 'fav', search: 'search' };
export const CHANGE_WATCHING = 'CHANGE_WATCHING';

const initialState = {
  currentTab: watchingValues.all
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_WATCHING: {
      return {
        currentTab: action.currentTab
      };
    }
    default: {
      return { ...state };
    }
  }
}
