import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getBooks } from '../actions/books';
import { deleteBook } from '../actions/books';
import BookCard from './BookCard'
import Books from '../containers/Books'

class BookShow extends React.Component {
  render() {
    return (
      <div className="col-md-8 col-md-offset-2">
        <h1>{this.props.book.name}</h1>
        <p>author: {this.props.book.author}</p>
        <p>img_url: {this.props.book.img_url}</p>
        <p>rating: {this.props.book.rating}</p>
      </div>
    );
  }
};

BookShow.propTypes = {
  book: PropTypes.object.isRequired
};


function mapStateToProps(state, ownProps) {
  let book = {name: '', author: '', img_url: '', rating: ''};
  debugger
  const id = ownProps.params.id;
  if (state.books.length > 0) {
    book = Object.assign({}, state.books.find(book => book.id == id))
  }
  return {book: book};
};

export default connect(mapStateToProps)(BookShow);
