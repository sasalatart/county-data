import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import CountiesPaginator from './CountiesPaginator';

const CountiesList = ({ counties }) => {
  const countiesListGroup = counties.map(county => {
    return(
      <ListGroupItem
        key={county._id}
        header={county.name}
        onClick={() => console.log(county._id)}>

        {county.state}
      </ListGroupItem>
    );
  });

  return(
    <div>
      <CountiesPaginator />
      <ListGroup>{ countiesListGroup }</ListGroup>
      <CountiesPaginator />
    </div>
  );
};

export default CountiesList;
