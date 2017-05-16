import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import CountiesIndex from './CountiesIndex';
import County from './County';
import Navbar from './Navbar';
import { fetchAllCounties } from '../redux/actions';

class App extends Component {
  componentDidMount() {
    if (this.props.counties.length === 0) {
      this.props.fetchAllCounties(1);
    }
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <Row>
            <Col sm={4}><CountiesIndex /></Col>
            { this.props.currentCounty._id && <Col sm={8}><County /></Col> }
          </Row>
        </div>
      </div>
    );
  }
}

const mapState = ({ allCounties: { counties }, currentCounty }) => {
  return {
    counties,
    currentCounty
  };
};
const mapDispatch = { fetchAllCounties };

export default connect(mapState, mapDispatch)(App);
