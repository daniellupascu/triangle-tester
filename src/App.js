import React, { Component } from 'react';
import './App.css';

import Navigation from './Navigation/Navigation';
import Tester from './Tester/Tester';

// Class Component App, which is the component at the tip of the pyramid in our project
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Tester />
      </div>
    );
  }
}

export default App;
