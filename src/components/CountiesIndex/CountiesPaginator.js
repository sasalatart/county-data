import React from 'react';
import { Pagination } from 'react-bootstrap';

const CountiesPaginator = ({ currentPage, pages, fetchFunction, countyName }) => {
  const handleSelect = (page) => {
    countyName ? fetchFunction(countyName, page) : fetchFunction(page);
  };

  return(
    <div className="flex-justify-center">
      <Pagination
        bsSize="small"
        prev
        next
        ellipsis
        boundaryLinks
        items={pages}
        maxButtons={3}
        activePage={currentPage}
        onSelect={handleSelect}
      />
    </div>
  );
};

export default CountiesPaginator;
