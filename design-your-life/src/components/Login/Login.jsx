import React from "react";
import styles from "styled-components";
import Logo from "../../styles/nav-logo.png";

const Login = props => {
  return (
    <LoginPageStyles>
      <LoginMenuStyles onSubmit={props.logIn}>
        <LogoImage src={Logo} />
        <LoginInputStyles
          placeholder="Username"
          onChange={props.handleChange}
          name="currentUsername"
          value={props.currentUsername}
          required
          minLength="4"
        />
        <LoginInputStyles
          placeholder="Password"
          onChange={props.handleChange}
          name="currentPassword"
          value={props.currentPassword}
          required
          minLength="6"
        />
        <LoginButton>Login</LoginButton>
      </LoginMenuStyles>
      <SwitchMenuStyles>
        <CreateAccount onClick={props.switchView}>Create Account</CreateAccount>
      </SwitchMenuStyles>
    </LoginPageStyles>
  );
};

export default Login;

const LoginPageStyles = styles.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background: #FAFAFA;
 `;

const LoginMenuStyles = styles.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #E6E6E6;
  border-radius: 2px;
  width: 340px;
  background: #FFFFFF;
  padding: 10px 0;
`;

const LoginInputStyles = styles.input`
  border: 1px solid #EFEFEF;
  border-radius: 3px;
  margin-bottom: 7px;
  padding: 10px 0 10px 7px;
  width: 270px;
  background: #FAFAFA;

  &:focus {
    outline: none;
  }
`;

const LoginButton = styles.button`
  width: 272px;
  border: 1px solid #4e6d79;
  border-radius: 4px;
  padding: 10px;
  margin: 10px 0;
  color: white;
  font-weight: 700;
  font-size: 14px;
  background: #4e6d79;

  &:hover {
    cursor: pointer;
  }
`;

const SwitchMenuStyles = styles.form`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #E6E6E6;
  border-radius: 2px;
  width: 340px;
  background: #FFFFFF;
  padding: 20px 0;
  margin-top: 15px;
`;

const LogoImage = styles.img`
  width: 200px;
  margin-bottom: 10px;
`;

const CreateAccount = styles.p`
  font-size: 1.2rem;
  font-weight: 600;
  padding: 0;
  cursor: pointer;
`;
