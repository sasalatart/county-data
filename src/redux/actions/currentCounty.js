import { reset, change } from 'redux-form';
import _ from 'lodash';
import { getCounty } from '../../api';

import {
  SET_COUNTY,
  SET_CURRENT_COUNTY_LOADING
} from '../reducer/currentCounty';

const countyFormReset = (county, subjectForm) => dispatch => {
  if (!_.get(subjectForm, 'values')) {
    return;
  }

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

export const countyFormResetOnSubjectChange = (newSubject, previousSubject, selectedYear, selectedIndicator) => dispatch => {
  if (!_.has(newSubject[0], selectedIndicator)) {
    dispatch(reset('indicator'));
  }

  const availableYears = newSubject.map(({ year }) => year);
  if (!_.includes(availableYears, parseInt(selectedYear, 10))) {
    dispatch(change('subject', 'year', availableYears[0]));
  }
};

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

export const fetchCounty = id => (dispatch, getState) => {
  dispatch(setLoading(true));
  getCounty(id).then(county => {
    dispatch(setCounty(county));
    dispatch(countyFormReset(county, _.get(getState(), 'form.subject')));
    dispatch(setLoading(false));
  });
};
