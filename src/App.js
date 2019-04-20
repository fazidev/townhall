import React, { Component } from 'react';
import Townhall from '../src/compnents/townhall';
import Music from '../src/compnents/audio'
// import Header from "../src/compnents/commoncomponent/header";

class App extends Component {
  render() {
    return (
      <div className="App">
          
          <Townhall/>
          <Music/>
      </div>
    );
  }
}

export default App;
