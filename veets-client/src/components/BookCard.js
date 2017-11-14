import React from 'react';

const BookCard = ({ book }) => (

  <div key={book.id} className="centered-col media">
    <div className="centered-col">
      <img className="img-thumbnail book-cover" src={book.img_url} alt={book.name} style={{ width:'50%' }}/>
      <h3 className="book-title">
        {book.id}. <a className="links" href={`/books/${book.id}`}>{book.name}</a>
      </h3>
      <p>Author: <span className="links">{book.author}</span></p>
      <p>Rating: {book.rating}/10 • Completed: {book.completed}</p>
    </div>
    <hr/>
  </div>
)

export default BookCard;
