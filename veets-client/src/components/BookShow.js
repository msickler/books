import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBooks } from '../actions/books';
import { deleteBook } from '../actions/books';
import BookCard from './BookCard'
import Books from '../containers/Books'

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
    const books = this.props.books
    const book = this.props.books.filter(book => book.id == this.props.location.pathname[7])
    //filter( b => b.id == this.props.params.id)[0]
    return (

      <div>
      <h1> hello </h1>
      {books}
        <img src={book.img_url} />
        <p className="">{book.name}</p>
        <p className="">{book.rating}</p>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return ({
    books: state.books
  })
}



export default connect(mapStateToProps, { getBooks })(BookShow);
