import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookCard from '../components/BookCard';
import BookForm from './BookForm';
import BookDelete from './BookDelete'
import BookEdit from './BookEdit';
import * as actions from '../actions/books.js'
import { bindActionCreators } from 'redux'
import './Books.css';

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
    this.setState({ currentlyDisplayed: this.props.books})
  }

  render() {
    const notCompleted = this.props.books.filter(book => book.completed === "no");
    return (
      <div className="BooksContainer">
        <div className="centered-col app-subtitle">
          Search
          <br />
          <input type="text" className="search-bar-field" onChange={this.onInputChange}/>
          <br/>
          <hr className="divider" />
          <br/>
        </div>
        {(this.state.searchTerm === '') ?
        this.props.books.map(book => <BookCard key={book.id} book={book} id={book.id} store={this.props.store} />) :
        this.state.currentlyDisplayed.map(book => <BookCard key={book.id} book={book} id={book.id} store={this.props.store} />) }
        <span className="book-title">Your open books </span>
        <br /><br />
        {notCompleted.map(book => <li className="centered-col lists"
          style={{ fontSize: '16px', textAlign: 'left', paddingLeft: '40px'}}>
          {book.id}. <span style={{ color: '#777'}}>{book.name}</span>    ||   <span style={{ color: '#777'}}>By: {book.author}</span>
        </li>)}

        <BookForm />
        <BookDelete />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

const mapStateToProps = (state) => {
  return ({ books: state.books })
}

 export default connect(mapStateToProps, mapDispatchToProps)(Books);
