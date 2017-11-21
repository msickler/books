import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as actions from '../actions/books.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class BookCard extends Component {

  handleClick = (event) => {
    debugger
    let book = this.props
    this.props.actions.addLikes(book)
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
       <p>Likes: {book.likes}</p>
       <button className="btn btn-default btn-sm buttons" type="edit" value={book.id} onClick={this.handleClick.bind(this)}>Like</button>

       <br />
     </div>
   )
 }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

 export default connect(null, mapDispatchToProps)(BookCard);
