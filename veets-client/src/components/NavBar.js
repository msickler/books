import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

import BookForm from '../containers/BookForm';
import Scroll from 'react-scroll'; // Imports all Mixins
import {scroller} from 'react-scroll';
import Section from './Section'



const NavBar = props => {
  return (
    <ul className="navBar">
      <li className="navBarLink">
        <Section />
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
