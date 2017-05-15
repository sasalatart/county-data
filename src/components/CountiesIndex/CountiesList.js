import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import _ from 'lodash';
import CountiesPaginator from './CountiesPaginator';
import { fetchAllCounties, searchByName, fetchCounty } from '../../redux/actions';
import { watchingValues } from '../../redux/reducer/allCounties';
import { buildGroupItems } from '../../utils';

class CountiesList extends Component {
  tabWatched() {
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

  properDisplay(counties) {
    if (counties.length > 0) {
      return(
        <ListGroup>
          { buildGroupItems(counties, this.handleCountyClick.bind(this), this.props.currentCounty) }
        </ListGroup>
      );
    } else {
      return <h3>There are no counties available.</h3>;
    }
  }

  handleCountyClick(id) {
    this.props.fetchCounty(id, this.props.subjectForm);
  }

  render() {
    const tabWatched = this.tabWatched();

    return(
      <div>
        { tabWatched.pages > 1 && <CountiesPaginator { ...tabWatched } /> }
        { this.properDisplay.bind(this)(tabWatched.counties) }
        { tabWatched.pages > 1 && <CountiesPaginator { ...tabWatched } /> }
      </div>
    );
  }
}

const mapState = ({
  allCounties,
  currentCounty,
  search,
  form: { countySearch, subject }}) => {
  return {
    allCounties,
    currentCounty,
    search,
    searchName: _.get(countySearch, 'values.name'),
    subjectForm: subject
  };
};
const mapDispatch = ({ fetchAllCounties, searchByName, fetchCounty });

export default connect(mapState, mapDispatch)(CountiesList);
