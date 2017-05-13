import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeWatching, fetchAllCounties } from '../../redux/actions';
import CountiesIndexTabs from './CountiesIndexTabs';
import CountiesList from './CountiesList';

class CountiesIndex extends Component {
  componentDidMount() {
    if (!this.props.pageCounties) {
      this.props.fetchAllCounties(1);
    }
  }

  render() {
    return (
      <div>
        <CountiesIndexTabs
          selected={this.props.selected}
          changeWatching={this.props.changeWatching}
          pageCountiesFromSearch={this.props.pageCountiesFromSearch} />

        <CountiesList
          onCountyClick={() => console.log('clicked')} />
      </div>
    );
  }
}

const mapState = ({ countiesIndex: { selected, pageCountiesFromSearch } }) => {
  return { selected, pageCountiesFromSearch };
};
const mapDispatch = { changeWatching, fetchAllCounties };

export default connect(mapState, mapDispatch)(CountiesIndex);
