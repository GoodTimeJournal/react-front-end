import React, { Component } from 'react';
import NavigationView from './views/NavigationView';
import './styles/App.scss';
import ActivityView from './views/ActivityView';

class App extends Component {
  render() {
    return (
      <>
        <NavigationView />
        <div className="app">
          <ActivityView />
        </div>
      </>
    );
  }
}

export default App;
