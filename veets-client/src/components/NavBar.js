import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = props => {
  return (
    <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px', borderTop: '2px solid black', paddingTop: '10px', marginTop: '12px' }}>
      <NavLink
        activeClassName="btn btn-primary"
        className="btn btn-secondary"
        style={{ marginRight: '10px' }}
        exact to="/"
      >Home
      </NavLink>

      </div>
  );
}

export default NavBar
