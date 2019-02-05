import React from "react";
import logo from "../../styles/nav-logo.png";
import { NavLink } from "react-router-dom";

const Navigation = props => {
  return (
    <nav>
      <NavLink to="/">
        <img className="logo" src={logo} alt="Good Time Journal" />
      </NavLink>
      <div className="primary-nav">
        <NavLink to="/">
          <h5>Home</h5>
        </NavLink>
        <h5 onClick={props.logOut}>Log Out</h5>
      </div>
    </nav>
  );
};

export default Navigation;
