import React from 'react';
import { NavLink } from 'react-router-dom';
import Section from '../containers/Section';
import './NavBar.css';

const HomeNav = props => {
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
        <li className="navBarLink">
          <NavLink
            exact to="/books/edit"
            >Edit
          </NavLink>
         </li>
         <li className="navBarLink">
           <NavLink
             exact to="/books/favorites"
             >Favorites
           </NavLink>
        </li>
     </ul>
    );
  }

export default HomeNav;
