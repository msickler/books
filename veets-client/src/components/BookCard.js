import React from 'react';
//import { deleteBook } from '../actions/books';
//import BookDelete from '../containers/BookDelete'


const BookCard = ({ book, onBookClick}) => (

  <div key={book.id} className="centered-col media">
  <div className="centered-col">
    <img className="img-thumbnail" src={book.img_url} alt={book.name} style={{ width:'50%' }}/>
      <h3 className="book-title">
      {book.id}. <a href={`/books/${book.id}`}>{book.name}</a>
      </h3>
      <p>Author: {book.author}</p>
      <p>Rating: {book.rating}</p>
      <p>Completed: {book.completed}</p>
  </div>
  <hr/>
  </div>
)


export default BookCard;
