import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import CountiesPaginator from './CountiesPaginator';
import { fetchAllCounties, searchByName, fetchCounty } from '../../redux/actions';
import { watchingValues } from '../../redux/reducer/allCounties';
import { buildGroupItems, getCurrentSearchName } from '../../utils';

class CountiesList extends Component {
  properDisplay() {
    const allCounties = {
      ...this.props.allCounties,
      fetchFunction: this.props.fetchAllCounties
    };

    const search = {
      ...this.props.search,
      fetchFunction: this.props.searchByName,
      countyName: this.props.searchName
    };

    return allCounties.selected === watchingValues.all ? allCounties : search;
  }

  render() {
    return(
      <div>
        <CountiesPaginator { ...this.properDisplay() } />

        <ListGroup>
          { buildGroupItems(this.properDisplay().counties, this.props.fetchCounty) }
        </ListGroup>

        <CountiesPaginator { ...this.properDisplay() } />
      </div>
    );
  }
}

const mapState = ({ allCounties, search, form }) => {
  return {
    allCounties,
    search,
    searchName: getCurrentSearchName(form)
  };
};
const mapDispatch = ({ fetchAllCounties, searchByName, fetchCounty });

export default connect(mapState, mapDispatch)(CountiesList);
