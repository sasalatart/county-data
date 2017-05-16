import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import CountiesPaginator from './CountiesPaginator';
import { fetchAllCounties, searchByName, fetchCounty } from '../../redux/actions';
import { watchingValues } from '../../redux/reducer/allCounties';
import { buildListGroup } from '../../utils';

class CountiesList extends Component {
  tabWatched() {
    const { allCounties, favouriteCounties, searchedCounties, fetchAllCounties, searchByName } = this.props;

    if (allCounties.selected === watchingValues.all) {
      return { ...allCounties, fetchFunction: fetchAllCounties };
    } else if (allCounties.selected === watchingValues.fav) {
      return { counties: favouriteCounties.counties };
    } else {
      return { ...searchedCounties, fetchFunction: searchByName };
    }
  }

  properDisplay(counties) {
    if (counties.length > 0) {
      return buildListGroup(counties, this.handleCountyClick.bind(this), this.props.currentCountyId);
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
      { tabWatched.pages > 1 ? <CountiesPaginator { ...tabWatched } /> : <hr /> }
      { this.properDisplay.bind(this)(tabWatched.counties) }
      { tabWatched.pages > 1 ? <CountiesPaginator { ...tabWatched } /> : <hr /> }
      </div>
    );
  }
}

const mapState = ({
  currentCounty,
  allCounties,
  searchedCounties,
  favouriteCounties,
  form: { subject }}) => {
  return {
    currentCountyId: currentCounty._id,
    allCounties,
    searchedCounties,
    favouriteCounties,
    subjectForm: subject
  };
};
const mapDispatch = ({ fetchAllCounties, searchByName, fetchCounty });

export default connect(mapState, mapDispatch)(CountiesList);
