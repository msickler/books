import React from 'react';

const BookCard = ({ book }) => (
  <div key={book.id} className="col-sm-4 media">
  <div className="media-middle">
    <img className="media-object img-thumbnail" src={book.img_url} alt={book.name} style={{ width:'50%' }}/>
    <div className="media-body">
      <h3 className="media-heading">{book.name}</h3>
      <p>Author: {book.author}</p>
      <p>Rating: {book.rating}</p>
    </div>
  </div>
  <hr/>
  </div>
)

export default BookCard;
