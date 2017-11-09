import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = props => {
  return (
    <div style={{ borderBottom: '2px solid black' }}>
      <NavLink
        activeClassName="btn btn-primary"
        className="btn btn-secondary"
        style={{ marginRight: '10px' }}
        exact to="/"
      >Home
      </NavLink>
      <NavLink
        activeClassName="btn btn-primary"
        className="btn btn-secondary"
        style={{ marginRight: '10px' }}
        exact to="/book"
      >Books
      </NavLink>
    </div>
  );
}

export default NavBar
