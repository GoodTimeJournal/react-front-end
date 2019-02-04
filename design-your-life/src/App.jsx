import React, { Component } from 'react';
import NavigationView from './views/NavigationView';
import './styles/App.scss';
import MainView from './views/MainView';
import ActionButtons from './components/Main/ActionButtons';
import ActivityFormView from './views/ActivityFormView';
import LoginView from './views/LoginView';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';

class App extends Component {
  state = {
    isLoggedIn: true
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
        <Route
          exact
          path="/"
          render={props => (
            <MainView {...props} activityLog={this.props.activityLog} />
          )}
        />
        <Route
          path="/activity"
          render={props => <ActivityFormView {...props} />}
        />
        <Link to="/activity">
          <ActionButtons />
        </Link>
      </>
    ) : (
      <LoginView logIn={this.logIn} />
    );
  }
}

export default App;
