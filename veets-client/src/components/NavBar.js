import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = props => {
  return (
    <div className="navBar">
      <NavLink
        className="navBarLink"
        exact to="/"
      >Home
      </NavLink>
      <NavLink
        className="navBarLink"
        exact to="/book"
      >Books
      </NavLink>
    </div>
  );
}

export default NavBar
