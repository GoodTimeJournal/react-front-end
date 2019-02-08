import React from 'react';
import logo from '../../styles/nav-logo.png';
import { NavLink } from 'react-router-dom';
import Loader from 'react-loader-spinner';

const Navigation = props => {
  return (
    <nav>
      <div className="logo-loader-div">
        <NavLink to="/">
          <img className="logo" src={logo} alt="Good Time Journal" />
        </NavLink>
        <div className="loader">
          {props.isLoading ? (
            <Loader
              className="loader"
              type="TailSpin"
              color="black"
              height={30}
              width={30}
            />
          ) : null}
        </div>
      </div>
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
