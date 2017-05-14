import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeWatching, fetchAllCounties } from '../../redux/actions';
import CountiesIndexTabs from './CountiesIndexTabs';
import CountiesList from './CountiesList';

class CountiesIndex extends Component {
  componentDidMount() {
    if (this.props.counties.length === 0) {
      this.props.fetchAllCounties(1);
    }
  }

  render() {
    return (
      <div>
        <CountiesIndexTabs
          selected={this.props.selected}
          changeWatching={this.props.changeWatching}
          countiesFromSearch={this.props.countiesFromSearch} />

        <CountiesList
          onCountyClick={() => console.log('clicked')} />
      </div>
    );
  }
}

const mapState = ({ allCounties, search }) => {
  return {
    selected: allCounties.selected,
    counties: allCounties.counties,
    countiesFromSearch: search.counties
  };
};
const mapDispatch = { changeWatching, fetchAllCounties };

export default connect(mapState, mapDispatch)(CountiesIndex);
