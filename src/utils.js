import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import _ from 'lodash';
import decamelize from 'decamelize';

export const WELL_PADDING = 20;

export const buildListGroup = (counties, onCountyClick, currentCountyId) => {
  const items = counties.map(county => {
    const displayName = `${county.name} (${county.state})`;
    return(
      <ListGroupItem
        key={county._id}
        onClick={() => onCountyClick(county._id)}
        active={county._id === currentCountyId}>
        {displayName}
      </ListGroupItem>
    );
  });

  return <ListGroup>{items}</ListGroup>;
};

export const buildSubjectOptions = (subjects, selected) => {
  const options = selected ? [] : [<option key={0}>Select subject...</option>];
  options.push(Object.keys(subjects).map(key => {
    return <option key={key} value={key}>{decamelize(key, ' ')}</option>;
  }));

  return options;
};

export const buildYearOptions = (subjectArray, selected) => {
  const options = selected ? [] : [<option key={0}>Select year for the table...</option>];
  options.push(subjectArray.map(({ year }) => {
    return <option key={year} value={year}>{year}</option>;
  }));

  return options;
};

export const buildIndicatorOptions = (indicators, selected) => {
  indicators = _.reject(indicators, stat => _.includes(['_id', 'year'], stat));
  const options = selected ? [] : [<option key={0}>Select indicator to plot...</option>];
  options.push(indicators.map(key => {
    return <option key={key} value={key}>{decamelize(key, ' ')}</option>;
  }));

  return options;
};

export const buildTableData = (subjectArray, selectedYear) => {
  const data = _.find(subjectArray, o => o.year === parseInt(selectedYear, 10)) || {};
  delete data._id;
  return data;
};

export const buildGraphData = (subjectArray, selectedIndicator) => {
  return subjectArray.map(yearData => {
    const json = { year: yearData.year };
    json[selectedIndicator] = yearData[selectedIndicator];
    return json;
  });
};

export const randomElement = array => {
  return array[Math.floor(Math.random() * array.length)];
};

export const countyFormResetOnSubjectChange = (newSubject, selectedYear, change) => {
  const availableYears = newSubject.map(({ year }) => year);
  if (!_.includes(availableYears, parseInt(selectedYear, 10))) {
    change('subject', 'year', availableYears[0]);
  }
};

export const indicatorFormResetOnSubjectChange = (newSubject, selectedIndicator, reset) => {
  if (!_.has(newSubject[0], selectedIndicator)) {
    reset('indicator');
  }
};
