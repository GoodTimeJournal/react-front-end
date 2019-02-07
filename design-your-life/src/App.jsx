import React, { Component } from "react";
import NavigationView from "./views/NavigationView";
import "./styles/App.scss";
import MainView from "./views/MainView";
import ActivityFormView from "./views/ActivityFormView";
import LoginView from "./views/LoginView";
import ReflectionFormView from "./views/ReflectionFormView";
import { Route } from "react-router";
import { connect } from "react-redux";
import { logout } from "./store/actions/user";

class App extends Component {
  logout = () => {
    this.props.logout();
  };

  render() {
    return this.props.loggedIn ? (
      <>
        <NavigationView logout={this.logout} />
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
      <LoginView />
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.user.loggedIn
  };
};

export default connect(
  mapStateToProps,
  { logout }
)(App);
