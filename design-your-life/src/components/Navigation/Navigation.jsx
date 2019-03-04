import React from 'react';
import logo from '../../styles/nav-logo.png';
import { NavLink } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

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
      <PrimaryNav>
        <NavLink exact to="/" className="hide-on-mobile">
          <p>Welcome</p>
        </NavLink>
        <NavLink to="/activities">
          <p>Activities</p>
        </NavLink>
        <NavLink to="/reflections">
          <p>Reflections</p>
        </NavLink>
        <a
          className="hide-on-mobile"
          href="https://goodtimejournal.netlify.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>About</p>
        </a>
        <i
          onClick={props.logout}
          className="fas fa-sign-out-alt"
          title="Logout"
        />
      </PrimaryNav>
    </nav>
  );
};

export default Navigation;

const PrimaryNav = styled.div`
  display: flex;
  margin-top: 10px;

  a {
    text-decoration: none;
    color: #333333;
    margin: 0 10px;
    font-weight: 700;

    p {
      letter-spacing: 0.75px;
    }
  }

  i {
    font-size: 25px;
    margin: 0 20px;

    @media (max-width: 600px) {
      margin: 0 5px;
    }
  }

  .hide-on-mobile {
    @media (max-width: 600px) {
      display: none;
    }
  }
`;
