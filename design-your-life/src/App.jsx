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
// Views
import Welcome from './components/Welcome/welcome';
import Reflections from './views/ReflectionView';
import Activities from './views/ActivityView';

class App extends Component {
  logout = () => {
    this.props.logout();
    localStorage.clear();
    this.props.history.push('/');
  };

  render() {
    return this.props.loggedIn ? (
      <>
        <NavigationView logout={this.logout} isLoading={this.props.isLoading} />
        <Route
          exact
          path="/mainview"
          render={props => (
            <MainView
              {...props}
              reflectionLog={this.props.reflectionLog}
              activityLog={this.props.activityLog}
            />
          )}
        />
        <Route exact path="/" render={props => <Welcome {...props} />} />
        <Route path="/activities" render={props => <Activities {...props} />} />
        <Route
          path="/reflections"
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
    isLoading: state.activity.isLoading
  };
};

export default connect(
  mapStateToProps,
  { logout }
)(App);
