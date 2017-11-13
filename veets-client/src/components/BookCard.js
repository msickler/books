import React from 'react';
//import { deleteBook } from '../actions/books';
//import BookDelete from '../containers/BookDelete'

const BookCard = ({ book,

  //handleOnClick = () => {
  //    this.props.store.dispatch({
  //      type: 'DELETE_BOOK',
  //      id: this.props.id
  //    });
  //  }
 }) => (
  <div key={book.id} className="centered-col media">
  <div className="centered-col">
    <img className="img-thumbnail" src={book.img_url} alt={book.name} style={{ width:'50%' }}/>
      <h3 className="book-title">
      <a href={`/books/${book.id}`}>{book.name}</a>
      </h3>
      <p>Author: {book.author}</p>
      <p>Rating: {book.rating}</p>
      <button onClick={this.handleOnClick} className="btn btn-default">delete</button>
  </div>
  <hr/>
  </div>
)

export default BookCard;
