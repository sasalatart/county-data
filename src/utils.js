import React from 'react';
import { ListGroupItem } from 'react-bootstrap';

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

export const getCurrentSearchName = form => {
  const values = form.countySearch.values;
  return values ? values.countyName : '';
};
