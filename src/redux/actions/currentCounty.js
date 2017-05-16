import { reset, change } from 'redux-form';
import _ from 'lodash';
import { GET_COUNTY } from '../reducer/currentCounty';
import { getCounty } from '../../api';

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

export const fetchCounty = (id, subjectForm) => dispatch => {
  getCounty(id).then(county => {
    dispatch(countyFormReset(county, subjectForm));
    dispatch({
      type: GET_COUNTY,
      county
    });
  });
};
