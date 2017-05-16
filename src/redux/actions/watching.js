import { CHANGE_WATCHING } from '../reducer/watching';

export const changeWatching = currentTab => {
  return {
    type: CHANGE_WATCHING,
    currentTab
  };
};
