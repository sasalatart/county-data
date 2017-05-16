import React from 'react';
import PropTypes from 'prop-types';
import { Pagination } from 'react-bootstrap';

const CountiesPaginator = ({ currentPage, pages, fetchFunction, searchedName }) => {
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
        onSelect={page => fetchFunction(page, searchedName)}
      />
    </div>
  );
};

CountiesPaginator.propTypes = {
  currentPage: PropTypes.number.isRequired,
  pages: PropTypes.number.isRequired,
  fetchFunction: PropTypes.func.isRequired,
  searchedName: PropTypes.string
};

export default CountiesPaginator;
