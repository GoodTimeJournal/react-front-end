import React from 'react';
import logo from '../../styles/nav-logo.png';

const Navigation = props => {
  return (
    <nav>
      <img className="logo" src={logo} alt="Good Time Journal" />
      <div className="primary-nav">
        <h5>Home</h5>
        <h5 onClick={props.logOut}>Log Out</h5>
      </div>
    </nav>
  );
};

export default Navigation;
