import React, { Component } from 'react';
import CountiesIndex from './CountiesIndex';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>County Data App</h1>
        <div className="row">
          <div className="col-sm-4">
            <CountiesIndex />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
