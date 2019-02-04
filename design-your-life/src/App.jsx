import React, { Component } from 'react';
import NavigationView from './views/NavigationView';
import './styles/App.scss';
import FeedView from './views/FeedView';
import ActionButtons from './components/Home/ActionButtons';

class App extends Component {
  render() {
    return (
      <>
        <NavigationView />
        <div className="app">
          <FeedView activityLog={this.props.activityLog} />
        </div>
        <ActionButtons />
      </>
    );
  }
}

export default App;
