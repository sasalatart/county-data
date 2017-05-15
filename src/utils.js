import React from 'react';
import { ListGroupItem } from 'react-bootstrap';
import decamelize from 'decamelize';

export const buildGroupItems = (counties, onCountyClick) => {
  return counties.map(county => {
    return(
      <ListGroupItem
        key={county._id}
        header={county.name}
        onClick={() => onCountyClick(county._id)}>

        {county.state}
      </ListGroupItem>
    );
  });
};

export const buildSubjectOptions = (statistics, selected) => {
  const options = selected ? [] : [<option key={0}>Select subject...</option>];
  options.push(Object.keys(statistics).map(key => {
    return <option key={key} value={key}>{decamelize(key, ' ')}</option>;
  }));

  return options;
};

export const buildYearOptions = (subjectArray, selected) => {
  const options = selected ? [] : [<option key={0}>Select year...</option>];
  options.push(subjectArray.map(({ year }) => {
    return <option key={year} value={year}>{year}</option>;
  }));

  return options;
};
