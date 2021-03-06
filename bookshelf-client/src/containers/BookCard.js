import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as actions from '../actions/books.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class BookCard extends Component {
  constructor(props) {
   super(props)

   this.state = {
     likes: this.props.likes || 0
   }
 }

  handleClick = (event) => {
    //const bookAttributes = {id: this.props.id}
    //bookAttributes['likes'] = this.props.likes + 1
    this.props.actions.addLikes(this.props.book)
  }

 render() {
   const { book, handleSubmit } = this.props

   return (
     <div key={book.id} className="media book-card">
       <br/>
       <img className="img-thumbnail book-cover" src={book.img_url} alt={book.name} style={{ width:'50%' }}/>
       <h3 className="book-title">
         {book.id}. <Link to={`/books/${book.id}/edit`} className="links">{book.name}</Link>
         <button className="btn btn-sm buttons delete-button" type="delete" value={book.id} onClick={handleSubmit}>×</button>
       </h3>
       <p>Author: <span className="links">{book.author.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();})}</span></p>
       <p>Rating: {book.rating}/10 • Completed: {book.completed}</p>
       <p style={{ color: '#777' }}><button className="btn btn-sm like-button" type="edit" value={book.likes} onClick={this.handleClick}>like</button> <span role="img">👍</span> {book.likes}</p>
     </div>
   )
 }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

const mapStateToProps = (state) => {
  return ({ books: state.books })
}

export default connect(mapStateToProps, mapDispatchToProps)(BookCard);
