import React, { Component } from 'react';
import NavigationView from './views/NavigationView';
import './styles/App.scss';
import FeedView from './views/FeedView';
import ActionButtons from './components/Home/ActionButtons';
import LoginView from './views/LoginView';

class App extends Component {
  state = {
    isLoggedIn: false
  };

  logIn = e => {
    e.preventDefault();
    this.setState({
      isLoggedIn: true
    });
  };

  logOut = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    return this.state.isLoggedIn ? (
      <>
        <NavigationView logOut={this.logOut} />
        <div className="app">
          <FeedView activityLog={this.props.activityLog} />
        </div>
        <ActionButtons />
      </>
    ) : (
      <LoginView logIn={this.logIn} />
    );
  }
}

export default App;
