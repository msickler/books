import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';
import Section from './Section';

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
        <li className="navBarLink">
          <Section />
        </li>
     </ul>
    );
  }

export default NavBar;
