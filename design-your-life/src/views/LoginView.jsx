import React, { Component } from 'react';

import Login from '../components/Login/Login';
import Register from '../components/Login/Register';
import { connect } from 'react-redux';
import { registerUser, loginUser } from '../store/actions/user';
import styles from 'styled-components';

class LoginView extends Component {
  state = {
    isNewUser: false,
    user: {
      name: '',
      email: '',
      username: '',
      password: '',
    },
    error: '',
  };
  componentDidMount() {
    this.setState({ error: this.props.error });
  }

  switchView = e => {
    e.preventDefault();
    this.setState(prevState => ({
      isNewUser: !prevState.isNewUser,
    }));
  };

  registerUser = e => {
    e.preventDefault();
    this.props.registerUser(this.state.user);
    this.setState({
      isNewUser: false,
    });
  };

  loginUser = e => {
    e.preventDefault();
    this.props.loginUser(this.state.user);
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({
      ...this.state,
      user: { ...this.state.user, [e.target.name]: e.target.value },
    });
  };

  render() {
    return this.state.isNewUser ? (
      <Register
        handleChange={this.handleChange}
        switchView={this.switchView}
        registerUser={this.registerUser}
      />
    ) : this.props.error === 'fail' ? (
      <>
        <ErrorContainer>
          <ErrorMessage>Login Failed, invalid Username</ErrorMessage>
        </ErrorContainer>

        <Login
          switchView={this.switchView}
          loginUser={this.loginUser}
          handleChange={this.handleChange}
          isLoading={this.props.isLoading}
          displayError={this.displayError}
          error={this.state.error}
          displaySuccess={this.displaySuccess}
        />
      </>
    ) : (
      <>
        <Login
          switchView={this.switchView}
          loginUser={this.loginUser}
          handleChange={this.handleChange}
          isLoading={this.props.isLoading}
          displayError={this.displayError}
          error={this.state.error}
          displaySuccess={this.displaySuccess}
        />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.user.isLoading,
    error: state.user.error,
  };
};

export default connect(
  mapStateToProps,
  { registerUser, loginUser }
)(LoginView);

const ErrorContainer = styles.div`
position: absolute;
  z-index: 10;
  display: inline-block;
  text-align: center;
  width: 100%;
  background-color: red;
  color: white;
`;
const ErrorMessage = styles.p`

`;
