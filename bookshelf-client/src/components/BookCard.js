import React from 'react';

const BookCard = ({ book }) => (

  <div key={book.id} className="media book-card">
    <img className="img-thumbnail book-cover" src={book.img_url} alt={book.name} style={{ width:'50%' }}/>
    <h3 className="book-title">
      {book.id}. <a className="links">{book.name}</a>
    </h3>
    <p>Author: <span className="links">{book.author.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();})}</span></p>
    <p>Rating: {book.rating}/10 • Completed: {book.completed}</p>
    <br />
  </div>
)

export default BookCard;
