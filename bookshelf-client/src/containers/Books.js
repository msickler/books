import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookCard from '../components/BookCard';
import BookOpen from '../components/BookOpen';
import BookForm from './BookForm';
import BookDelete from './BookDelete'
import * as actions from '../actions/books.js'
import { bindActionCreators } from 'redux'
import './Books.css';
import { Route, Switch } from 'react-router-dom';
import HomeNav from '../components/HomeNav'


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

 handleOnDelete = (event) => {
   event.preventDefault();
   let id = event.target.value
   this.props.actions.deleteBook(id)
   this.setState({id: ""})
 }

  componentDidMount() {
    this.props.actions.getBooks()
    this.setState({ currentlyDisplayed: this.props.books})
  }

  render() {
    const { match } = this.props
    const notCompleted = this.props.books.filter(book => book.completed === "no" || book.completed === "No" );

    return (
      <div className="BooksContainer">
        <Switch>
          <Route exact path={match.url} render={() => (
            <div>
            <HomeNav />
              <div className="centered-col app-subtitle">
                Search
                <br />
                <input type="text" className="search-bar-field" onChange={this.onInputChange}/>
                <br/>
                <hr className="divider" />
                <br/>
              </div>
              <div className="row books-container">
                {(this.state.searchTerm === '') ?
                this.props.books.map(book => <BookCard key={book.id} book={book} id={book.id} store={this.props.store} handleSubmit={this.handleOnDelete}/>) :
                this.state.currentlyDisplayed.map(book => <BookCard key={book.id} book={book} id={book.id} store={this.props.store} handleSubmit={this.handleOnDelete}/>) }
                <br />
              </div>
              <hr className="divider"/>
              <div className="row centered-col">
                <span className="book-title">Your open books </span>
                <a className="links" href="/books/edit">→ Edit?</a>
                <br /><br />
                {notCompleted.map(book => <BookOpen key={book.id} book={book} id={book.id} store={this.props.store} />)}
                <BookForm />
                <BookDelete />
              </div>
            </div>
          )}/>
       </Switch>
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
