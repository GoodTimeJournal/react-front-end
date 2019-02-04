import React, { Component } from 'react';
import NavigationView from './views/NavigationView';
import './styles/App.scss';
import FeedView from './views/FeedView';

class App extends Component {
  render() {
    return (
      <>
        <NavigationView />
        <FeedView activityLog={this.props.activityLog} />
      </>
    );
  }
}

export default App;
