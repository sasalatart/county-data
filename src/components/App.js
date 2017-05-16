import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import CountiesIndex from './CountiesIndex';
import County from './County';
import Navbar from './Navbar';

const App = ({ currentCounty }) => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Row>
          <Col sm={4}><CountiesIndex /></Col>
          { currentCounty._id && <Col sm={8}><County /></Col> }
        </Row>
      </div>
    </div>
  );
};

const mapState = ({ currentCounty }) => ({ currentCounty });

export default connect(mapState)(App);
