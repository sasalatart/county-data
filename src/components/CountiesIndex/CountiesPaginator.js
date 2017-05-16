import React from 'react';
import { connect } from 'react-redux';
import { Pagination } from 'react-bootstrap';
import _ from 'lodash';

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

const mapState = ({ form: { countySearch } }) => {
  return {
    searchedName: _.get(countySearch, 'values.name')
  };
};

export default connect(mapState)(CountiesPaginator);
