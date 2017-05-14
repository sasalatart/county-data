import { GET_COUNTY } from '../reducer/currentCounty';
import { getCounty } from '../../api';

export const fetchCounty = id => dispatch => {
  getCounty(id).then(county => {
    dispatch({
      type: GET_COUNTY,
      county
    });
  });
};
