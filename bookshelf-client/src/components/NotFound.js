import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <br /><br /><br />
          <h2>404 Not Found</h2>
          <p className="App-subtitle">An error has occured, the requested page was not found.</p>
          <br/><br />
          <NavLink
            className="btn btn-default btn-sm buttons"
            exact to="/"
            >Back Home
          </NavLink>
          <br /><br /><br /><br />
        </div>
      </div>
    </div>
  )
}

export default NotFound;
