import React, { Component } from 'react';
import NavigationView from './views/NavigationView';
import './styles/App.scss';
import MainView from './views/MainView';
// import ActivityFormView from './views/ActivityFormView';
import LoginView from './views/LoginView';
// import ReflectionFormView from './views/ReflectionFormView';
import { Route } from 'react-router';
import { connect } from 'react-redux';
import { logout } from './store/actions/user';

import Welcome from './components/Welcome/welcome';
import Reflections from './components/Reflections/reflections';
import Activities from './views/ActivityView';

class App extends Component {
  logout = () => {
    this.props.logout();
    // localStorage.clear();
  };

  render() {
    return this.props.loggedIn ? (
      <>
        <NavigationView logout={this.logout} isLoading={this.props.isLoading} />
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
        <Route path="/welcome" render={props => <Welcome {...props} />} />
        <Route path="/activity" render={props => <Activities {...props} />} />
        <Route
          path="/reflection"
          render={props => <Reflections {...props} />}
        />
      </>
    ) : (
      <LoginView />
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.user.loggedIn,
    isLoading: state.activity.isLoading,
  };
};

export default connect(
  mapStateToProps,
  { logout }
)(App);
