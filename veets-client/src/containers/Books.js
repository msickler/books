import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookCard from '../components/BookCard';
import BookForm from './BookForm';
import { getBooks } from '../actions/books';
import './Books.css';

class Books extends Component {

  componentDidMount() {
    this.props.getBooks()
  }

  render() {
    return (
      <div className="BooksContainer">
        {this.props.books.map(book => <BookCard key={book.id} book={book} id={book.id} store={this.props.store}/>)}
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
