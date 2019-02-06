import React, { Component } from 'react';
import NavigationView from './views/NavigationView';
import './styles/App.scss';
import MainView from './views/MainView';
import ActivityFormView from './views/ActivityFormView';
import LoginView from './views/LoginView';
import ReflectionFormView from './views/ReflectionFormView';
import { Route } from 'react-router';

class App extends Component {
  state = {
    isLoggedIn: false
  };

  logOut = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    return this.state.isLoggedIn ? (
      <>
        <NavigationView logOut={this.logOut} />
        <Route
          exact
          path="/"
          render={props => (
            <MainView
              {...props}
              reflectionLog={this.props.reflectionLog}
              activityLog={this.props.activityLog}
            />
          )}
        />
        <Route
          path="/activity"
          render={props => <ActivityFormView {...props} />}
        />
        <Route
          path="/reflection"
          render={props => <ReflectionFormView {...props} />}
        />
      </>
    ) : (
      <LoginView logIn={this.logIn} />
    );
  }
}

export default App;
