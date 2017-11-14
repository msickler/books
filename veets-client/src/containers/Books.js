import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookCard from '../components/BookCard';
import BookForm from './BookForm';
import './Books.css';
import BookDelete from './BookDelete'
import BookEdit from './BookEdit';
import * as actions from '../actions/books.js'
import { bindActionCreators } from 'redux'

class Books extends Component {
  constructor(props) {
   super(props);

   this.state = {
     books: [],
     searchTerm: '',
     newlyDisplayed: [],
     currentlyDisplayed: this.props.books
   }
   this.onInputChange = this.onInputChange.bind(this)
 }

 onInputChange(event) {
   let newlyDisplayed = this.props.books.filter(book => book.name.toLowerCase().includes(event.target.value.toLowerCase()))
   this.setState({
     searchTerm: event.target.value,
     currentlyDisplayed: newlyDisplayed
   })
 }

  componentDidMount() {
    this.props.actions.getBooks()
  }

  render() {
    return (
      <div className="BooksContainer">
      <div className="row">
      <div className="centered-col app-subtitle">
      Search <br />
      <input type="text" className="search-bar-field" onChange={this.onInputChange}/>
      <br/>
      <hr className="divider" />
      <br/>
      </div>
      </div>
        {this.state.currentlyDisplayed.map(book => <BookCard key={book.id} book={book} id={book.id} store={this.props.store} />)}
        <div className="col-md-8">
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
