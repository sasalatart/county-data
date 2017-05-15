import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import CountiesIndex from './CountiesIndex';
import County from './County';
import Navbar from './Navbar';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <Row>
            <Col sm={4}><CountiesIndex /></Col>
            {
              this.props.currentCounty._id &&
              <Col sm={8}><County county={this.props.currentCounty} /></Col>
            }
          </Row>
        </div>
      </div>
    );
  }
}

const mapState = ({ currentCounty }) => ({ currentCounty });

export default connect(mapState)(App);
