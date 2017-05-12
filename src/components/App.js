import React, { Component } from 'react';
import CountiesIndexTabs from './CountiesIndexTabs';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>County Data App</h1>
        <div className="row">
          <div className="col-sm-4">
            <CountiesIndexTabs />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
