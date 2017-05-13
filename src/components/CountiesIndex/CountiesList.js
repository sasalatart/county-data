import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import CountiesPaginator from './CountiesPaginator';
import { fetchAllCounties, searchByName } from '../../redux/actions';
import { watchingValues } from '../../redux/reducer/countiesIndex';
import {
  buildGroupItems,
  getCurrentSearchName,
  parseWatchingAllValues,
  parseWatchingSearchValues
} from '../../utils';

class CountiesList extends Component {
  properDisplay() {
    switch (this.props.selected) {
      case watchingValues.all: {
        return parseWatchingAllValues(this.props);
      }
      case watchingValues.search: {
        return parseWatchingSearchValues(this.props);
      }
      default: {
        parseWatchingAllValues(this.props);
      }
    }
  }

  render() {
    const display = this.properDisplay();

    return(
      <div>
        <CountiesPaginator { ...display } />
        <ListGroup>{ buildGroupItems(display.counties) }</ListGroup>
        <CountiesPaginator { ...display } />
      </div>
    );
  }
}

const mapState = ({
  countiesIndex: {
    selected,
    currentPage,
    pages,
    pageCounties,
    currentPageFromSearch,
    pagesFromSearch,
    pageCountiesFromSearch
  },
  form }) => {
  return {
    selected,
    currentPage,
    pages,
    pageCounties,
    currentPageFromSearch,
    pagesFromSearch,
    pageCountiesFromSearch,
    searchName: getCurrentSearchName(form)
  };
};
const mapDispatch = ({ fetchAllCounties, searchByName });

export default connect(mapState, mapDispatch)(CountiesList);
