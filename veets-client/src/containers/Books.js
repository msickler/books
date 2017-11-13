import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookCard from '../components/BookCard';
import BookForm from './BookForm';
import { getBooks } from '../actions/books';
import './Books.css';

class Books extends Component {
  handleDelete(id) {
    this.props.handleDelete(id);
}

handleOnClick() {
  debugger
  this.props.store.dispatch({
        type: 'DELETE_BOOK',
        id: this.props.id
      });
}

  componentDidMount() {
    this.props.getBooks()
  }

  render() {
    const books = this.props.books;
    return (
      <div className="BooksContainer">
        {this.props.books.map(book => <BookCard key={book.id} book={book} id={book.id} onClick={this.handleOnClick.bind(this)} store={this.props.store} />)}
        <div className="col-md-8">
          {this.props.children}
        </div>
        <BookForm />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    books: state.books
  })
}

 export default connect(mapStateToProps, { getBooks })(Books);
