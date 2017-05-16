import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import _ from 'lodash';
import CountiesIndexTabs from './CountiesIndex/CountiesIndexTabs';
import CountiesList from './CountiesIndex/CountiesList';
import County from './County';
import Navbar from './Navbar';
import { fetchAllCounties, fetchCounty } from '../redux/actions';

class App extends Component {
  componentDidMount() {
    const { currentCounty, allCounties, countyParamId } = this.props;

    if (allCounties.length === 0) {
      this.props.fetchAllCounties(1);
    }

    if (countyParamId !== currentCounty._id) {
      this.props.fetchCounty(countyParamId);
    }
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <Row>
            <Col sm={4}>
              <CountiesIndexTabs />
              <CountiesList />
            </Col>
            {
              this.props.countyParamId &&
              <Col sm={8}>
                <County />
              </Col>
            }
          </Row>
        </div>
      </div>
    );
  }
}

const mapState = ({ currentCounty, allCounties: { counties } }, ownProps) => {
  return {
    countyParamId: _.get(ownProps, 'match.params.id'),
    currentCounty,
    allCounties: counties
  };
};
const mapDispatch = { fetchAllCounties, fetchCounty };

export default connect(mapState, mapDispatch)(App);
