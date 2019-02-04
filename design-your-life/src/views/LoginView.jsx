import React, { Component } from 'react';

import Login from '../components/Login/Login';
import Register from '../components/Login/Register';

class LoginView extends Component {
  state = {
    isNewUser: false
  };

  switchView = (e) => {
    e.preventDefault()
    this.setState(prevState => ({
      isNewUser: !prevState.isNewUser
    }));
  };

  render() {
    return this.state.isNewUser ? (
      <Register switchView={this.switchView} />
    ) : (
      <Login switchView={this.switchView} logIn={this.props.logIn} />
    );
  }
}

export default LoginView;
