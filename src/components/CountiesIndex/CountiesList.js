import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Spinner from '../Spinner';
import CountiesPaginator from './CountiesPaginator';
import { fetchAllCounties, searchByName, fetchCounty } from '../../redux/actions';
import { watchingValues } from '../../redux/reducer/watching';
import { buildListGroup } from '../../utils';

class CountiesList extends Component {
  tabWatched() {
    const { allCounties, favouriteCounties, searchedCounties, searchedName } = this.props;

    if (this.props.currentTab === watchingValues.all) {
      return { ...allCounties, fetchFunction: this.props.fetchAllCounties };
    } else if (this.props.currentTab === watchingValues.fav) {
      return { counties: favouriteCounties.counties };
    } else {
      return { ...searchedCounties, fetchFunction: this.props.searchByName, searchedName };
    }
  }

  properDisplay(counties, loading) {
    if (loading) {
      return <Spinner size={128} />;
    } else if (counties.length > 0) {
      return buildListGroup(counties, this.props.fetchCounty, this.props.currentCountyId);
    } else {
      return <h3>There are no counties available.</h3>;
    }
  }

  render() {
    const tabWatched = this.tabWatched();

    return(
      <div>
        { tabWatched.pages > 1 ? <CountiesPaginator { ...tabWatched } /> : <hr /> }
        { this.properDisplay.bind(this)(tabWatched.counties, tabWatched.loading) }
        { tabWatched.pages > 1 ? <CountiesPaginator { ...tabWatched } /> : <hr /> }
      </div>
    );
  }
}

const mapState = ({
  currentCounty,
  watching: { currentTab },
  allCounties,
  searchedCounties,
  favouriteCounties,
  form: { countySearch }
}) => {
  return {
    currentCountyId: currentCounty._id,
    currentTab,
    allCounties,
    searchedCounties,
    favouriteCounties,
    searchedName: _.get(countySearch, 'values.name')
  };
};
const mapDispatch = ({ fetchAllCounties, searchByName, fetchCounty });

export default connect(mapState, mapDispatch)(CountiesList);
