import { reset } from 'redux-form';
import _ from 'lodash';
import { GET_COUNTY } from '../reducer/currentCounty';
import { getCounty } from '../../api';

const checkFormReset = (county, subjectForm, dispatch) => {
  if (!_.get(subjectForm, 'values')) {
    return;
  }

  const selectedSubject = _.get(subjectForm, 'values.name');
  const selectedYear = _.get(subjectForm, 'values.year');
  const subjectInCounty = _.get(county.statistics, selectedSubject, []);

  const hasSelectedSubject = subjectInCounty !== [];
  const hasSelectedYear = _.includes(subjectInCounty.map(json => json.year), parseInt(selectedYear, 10));

  if (!hasSelectedSubject || !hasSelectedYear) {
    dispatch(reset('subject'));
    dispatch(reset('indicator'));
  }
};

export const fetchCounty = (id, forms) => dispatch => {
  getCounty(id).then(county => {
    checkFormReset(county, forms, dispatch);
    dispatch({
      type: GET_COUNTY,
      county
    });
  });
};
