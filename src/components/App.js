import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import CountiesIndex from './CountiesIndex';
import Navbar from './Navbar';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <Row><Col sm={4}><CountiesIndex /></Col></Row>
        </div>
      </div>
    );
  }
}

export default App;
