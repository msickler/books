import React from 'react';
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <div className="row">
        <div className="centered-col">
          <img className="" src="http://www.powerpointhintergrund.com/uploads/books-transparent-background-25.png" alt="book" style={{ width:'50%' }}/>
          <hr className="divider" />
          <p className="about">
            Hello there! Welcome to BookList.<br/>
            We are an app created for those who love a good book and have accumulated quite the collection of reads.
            Here you can store nicely all the books you've read, rate them, save a nice picture for them, and store them forever.
            That way you can keep things nice an organized. <br/>
            Think of it as your virtual bookshelf, a lot easier to keep neat.
            </p>
            <br />
            <NavLink
              className="btn btn-default btn-sm buttons"
              exact to="/"
              >Go to books
            </NavLink>
            <br />
            <hr />
          </div>
      </div>
  </div>
  )
}

export default About;
