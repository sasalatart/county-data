import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setPage } from '../../redux/actions';
import CountiesList from './CountiesList';
import CountiesIndexTabs from './CountiesIndexTabs';

class CountiesIndex extends Component {
  componentDidMount() {
    if (!this.props.pageCounties) {
      this.props.setPage(1);
    }
  }

  render() {
    return (
      <div>
        <CountiesIndexTabs />
        {
          this.props.pageCounties &&
          <CountiesList
            counties={this.props.pageCounties}
            onCountyClick={() => console.log('clicked')} />
        }
      </div>
    );
  }
}

const mapState = ({ countiesIndex }) => {
  return {
    currentPage: countiesIndex.currentPage,
    pages: countiesIndex.pages,
    pageCounties: countiesIndex.pageCounties
  };
};

const mapDispatch = { setPage };

export default connect(mapState, mapDispatch)(CountiesIndex);
