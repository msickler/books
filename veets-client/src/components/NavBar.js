import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = props => {
  return (
    <ul className="nav navbar-nav">
    <li>
      <NavLink

        exact to="/"
      >Home
      </NavLink>
      </li>
      <li>
      <NavLink

        exact to="/book"
      >Book
      </NavLink>
      </li>
    </ul>
  );
}

export default NavBar
