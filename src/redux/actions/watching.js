import { CHANGE_WATCHING } from '../reducer/watching';

export const changeWatching = (selected) => {
  return {
    type: CHANGE_WATCHING,
    selected
  };
};
