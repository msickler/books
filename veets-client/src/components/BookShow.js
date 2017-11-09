import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBooks } from '../actions/books';
import BookCard from './BookCard'

class BookShow extends Component {

  handleOnClick = () => {
    this.props.store.dispatch({
      type: 'DELETE_BOOK',
      id: this.props.id
    })
  }

  render() {
    return (
      <li>
        <button onClick={this.handleOnClick}>Delete</button>
        <BookCard key={book.id} book={book} id={book.id} store={this.props.store}/>
      </li>
    );
  }
};

export default BookShow;
