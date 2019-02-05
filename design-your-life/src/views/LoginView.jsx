import React, { Component } from "react";

import Login from "../components/Login/Login";
import Register from "../components/Login/Register";

class LoginView extends Component {
  state = {
    isNewUser: false,
    fullname: "",
    email: "",
    username: "",
    password: ""
  };

  switchView = e => {
    e.preventDefault();
    this.setState(prevState => ({
      isNewUser: !prevState.isNewUser
    }));
  };

  saveRegisterData = e => {
    //Change the view after registered
    this.switchView();
  };
  handleChange = e => {
    console.log(this.state);
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return this.state.isNewUser ? (
      <Register handleChange={this.handleChange} switchView={this.switchView} />
    ) : (
      <Login switchView={this.switchView} logIn={this.props.logIn} />
    );
  }
}

export default LoginView;
