import React from 'react';
import { NavLink } from 'react-router-dom';


const About = () => {
  return (
    <div>
      <div className="row">
        <div className="centered-col">
          <img className="" src="http://www.powerpointhintergrund.com/uploads/books-transparent-background-25.png" alt="book" style={{ width:'30%', opacity: '0.6' }}/>
          <hr className="divider" />
          <p className="book-title">
            Welcome to BookShelf<br/>
          </p>
          <p className="about">
            We are an app created for those who love a good book and have accumulated quite the collection of reads.
            Here you can store nicely all the books you've read, rate them, save a cover and keep as long as you need. <br/>
            That way you can keep things nice an organized. <br/>
            Think of it as your virtual bookshelf, but a lot easier to maintain.<br/>
          </p><br/>
          <hr className="divider" />
          <p className="book-title">
            Here are some helpful guides<br/>
          </p>
          <p className="about guides">
            <ul className="guides">
              <li>To <strong>Add</strong> a book entry, navigate to 'Add' and enter your values, you can edit these at any time.</li>
              <li>To <strong>Edit</strong> a book, click on the title link, you will be redirected.
                  Or, if you prefer, navigate to 'Edit' and enter the book number you wish to edit. You'll be redirected.</li>
              <li>To <strong>Delete</strong> a book, simply click on the 'x' next to the title.
                  You may also navigate to the 'Delete' section and indicate which book you wish to delete.</li>
            </ul>
          </p>
          <br />
          <NavLink
            className="btn btn-default btn-sm buttons"
            exact to="/"
            >Go to books
          </NavLink>
          <br /><br /><br /><br />
          </div>
      </div>
  </div>
  )
}

export default About;