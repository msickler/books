import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';

const NavBar = props => {
  return (
    <ul className="navBar">
    <li className="navBarLink">
      <NavLink
        exact to="/"
      >Home
      </NavLink>
      </li>
      <li className="navBarLink">
      <NavLink
        exact to="/about"
      >About
      </NavLink>
      </li>
    </ul>
  );
}

export default NavBar
