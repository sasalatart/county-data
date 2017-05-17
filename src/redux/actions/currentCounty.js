import { push } from 'react-router-redux';
import { reset } from 'redux-form';
import _ from 'lodash';
import { getCounty } from '../../api';

import {
  SET_COUNTY,
  SET_CURRENT_COUNTY_LOADING
} from '../reducer/currentCounty';

const setCounty = county => {
  return {
    type: SET_COUNTY,
    county
  };
};

const setLoading = loading => {
  return {
    type: SET_CURRENT_COUNTY_LOADING,
    loading
  };
};

const countyFormResetOnNewCounty = (county, subjectForm) => dispatch => {
  const selectedSubject = _.get(subjectForm, 'values.name');
  const selectedYear = _.get(subjectForm, 'values.year');
  const subjectInCounty = _.get(county.statistics, selectedSubject, []);

  const hasSelectedSubject = subjectInCounty !== [];
  const hasSelectedYear = _.includes(subjectInCounty.map(({ year }) => year), parseInt(selectedYear, 10));

  if (!hasSelectedSubject || !hasSelectedYear) {
    dispatch(reset('subject'));
    dispatch(reset('indicator'));
  }
};

export const fetchCounty = id => (dispatch, getState) => {
  const subjectForm = _.get(getState(), 'form.subject');

  dispatch(setLoading(true));
  getCounty(id).then(county => {
    dispatch(setCounty(county));
    dispatch(push(`/counties/${county._id}`));
    dispatch(setLoading(false));
    dispatch(countyFormResetOnNewCounty(county, subjectForm));
  });
};
