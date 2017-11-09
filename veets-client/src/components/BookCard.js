import React from 'react';

const BookCard = ({ book }) => (
  <div key={book.id} className="col-sm-4">
    <h3>{book.name}</h3>
    <p>Author: {book.author}</p>
    <img className="img-thumbnail thumbnail" src={book.img_url} alt={book.name} style={{ width:'50%' }}/>
    <p>Rating: {book.rating}</p>
  </div>
)

export default BookCard;
