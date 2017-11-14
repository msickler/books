import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookCard from '../components/BookCard';
import BookForm from './BookForm';
import { getBooks } from '../actions/books';
import './Books.css';
import BookDelete from './BookDelete'
import BookEdit from './BookEdit';
import * as actions from '../actions/books.js'
import { bindActionCreators } from 'redux'

class Books extends Component {
  constructor(props) {
   super(props);

   this.state = {
     books: []
   }
 }

  componentDidMount() {
    this.props.actions.getBooks()
  }

  render() {
    const { match } = this.props
    return (
      <div className="BooksContainer">
        {this.props.books.map(book => <BookCard key={book.id} book={book} id={book.id} store={this.props.store} />)}
        <div className="col-md-8">
          {this.props.children}
        </div>
        <BookForm />
        <BookEdit />
        <BookDelete />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

const mapStateToProps = (state) => {
  return ({
    books: state.books
  })
}

 export default connect(mapStateToProps, mapDispatchToProps)(Books);
