import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBooks } from '../actions/books';
import BookCard from './BookCard'

class BookShow extends Component {
  componentDidMount() {
    this.props.getBooks()
  }

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
      </li>
    );
  }
};

export default BookShow;
