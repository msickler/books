import React from 'react';

const BookCard = ({ book }) => (
  <div key={book.id} className="BookCard">
    <h3>{book.name}</h3>
    <p>Author: {book.author}</p>
    <img className="BookImage" src={book.img_url} alt={book.name} />
    <p>Rating: {book.rating}</p>
  </div>
)

export default BookCard;
