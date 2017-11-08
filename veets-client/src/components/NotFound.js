import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
    <div class="container">
    <div class="row">
        <div class="col-md-12">
            <div class="error-template">
                <h1>Sorry</h1>
                <h2>404 Not Found</h2>
                <div class="error-details">
                    An error has occured, requested page not found.
                </div><hr/>
                <div class="error-actions">
                  <NavLink
                    className="btn btn-primary btn-lg"
                    exact to="/"
                  >Back Home</NavLink>
                </div>
            </div>
        </div>
    </div>
  </div>
  </div>
  )
}

export default NotFound;
