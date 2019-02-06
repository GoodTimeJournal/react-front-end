import React, { Component } from 'react';

import Login from '../components/Login/Login';
import Register from '../components/Login/Register';
import { connect } from 'react-redux';
import { registerUser, loginUser } from '../store/actions/user';

class LoginView extends Component {
  state = {
    isNewUser: false,
    user: {
      username: '',
      password: ''
    }
  };

  switchView = e => {
    e.preventDefault();
    this.setState(prevState => ({
      isNewUser: !prevState.isNewUser
    }));
  };

  registerUser = e => {
    e.preventDefault();
    this.props.registerUser(this.state.user);
  };

  loginUser = e => {
    e.preventDefault();
    this.props.loginUser(this.state.user);
  };

  saveRegisterData = e => {
    //Change the view after registered
    this.switchView();
  };
  handleChange = e => {
    e.preventDefault();
    this.setState({
      ...this.state,
      user: { ...this.state.user, [e.target.name]: e.target.value }
    });
  };

  render() {
    return this.state.isNewUser ? (
      <Register
        handleChange={this.handleChange}
        switchView={this.switchView}
        registerUser={this.registerUser}
      />
    ) : (
      <Login
        switchView={this.switchView}
        loginUser={this.loginUser}
        handleChange={this.handleChange}
      />
    );
  }
}

export default connect(
  null,
  { registerUser, loginUser }
)(LoginView);
