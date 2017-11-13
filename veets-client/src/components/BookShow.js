import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBooks } from '../actions/books';
import { deleteBook } from '../actions/books';

import BookCard from './BookCard'

const BookShow = ({ book }) =>
  <div className="col-md-8">
    <h2>{book.name}</h2>
    <p>{book.rating}</p>
  </div>;

const mapStateToProps = (state, ownProps) => {
  const book = state.books.find(book => book.id === ownProps.match.params.bookId)
  if (book) {
    return {book}
  } else {
    return { book: {} }
  }
};

export default connect(mapStateToProps)(BookShow);
