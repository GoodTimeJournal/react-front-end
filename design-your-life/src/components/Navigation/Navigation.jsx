import React from 'react';
import logo from '../../styles/nav-logo.png';
import { NavLink } from 'react-router-dom';

const Navigation = props => {
  return (
    <nav>
      <NavLink to="/">
        <img className="logo" src={logo} alt="Good Time Journal" />
      </NavLink>
      <div className="primary-nav">
        <i
          onClick={props.logout}
          className="fas fa-sign-out-alt"
          title="Logout"
        />
      </div>
    </nav>
  );
};

export default Navigation;
