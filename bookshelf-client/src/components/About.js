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
          <ul className="about guides">
            <li>To <strong>Add</strong> a book entry, navigate to 'Add' and enter your values, you can edit these at any time.</li>
            <li>To <strong>Edit</strong> a book, click on the title link, you will be redirected.
                Or, if you prefer, navigate to 'Edit' and enter the book number you wish to edit. You'll be redirected here too.</li>
            <li>To <strong>Delete</strong> a book, simply click on the 'x' next to the title.
                You may also navigate to the 'Delete' section and indicate which book you wish to delete.</li>
            <li>Navigate to <strong>Favorites</strong> to find your priced collection which contains all your books rated 10/10. </li>
          </ul>
          <p className="about">
            <br/>
            <strong>Note:</strong> no field or format is required, the app is for each user to keep their library under their own rules.<br/>
            At any moment, you can add a new title without a cover, adding a picture later, editing only the field you want to update, delete and re-do.<br/>
            However, the list of books will be sorted alphabetically automatically, and certain attributes, such as the Name and Author will be capitalized appropiatedly.
            Those are features the app can cover for you.
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
