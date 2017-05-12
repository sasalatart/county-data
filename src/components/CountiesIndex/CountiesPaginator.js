import React from 'react';
import { connect } from 'react-redux';
import { Pagination } from 'react-bootstrap';
import { setPage } from '../../redux/actions';

const CountiesPaginator = ({ currentPage, pages, setPage }) => {
  return(
    <div className="flex-justify-center">
      <Pagination
        bsSize="small"
        first
        last
        ellipsis
        boundaryLinks
        items={pages}
        maxButtons={3}
        activePage={currentPage}
        onSelect={setPage}
      />
    </div>
  );
};

const mapState = ({ countiesIndex }) => {
  return {
    currentPage: countiesIndex.currentPage,
    pages: countiesIndex.pages
  };
};

const mapDispatch = { setPage };

export default connect(mapState, mapDispatch)(CountiesPaginator);
