import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const API_URL = process.env.REACT_APP_API_URL;

class BookCard extends Component {
  constructor(props) {
   super(props)

   this.state = {
     likes: 0,
    }
  }

  handleOnClick = (event) => {
    console.log('clicking')
    this.setState({ likes: this.state.likes + 1})
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
       <button onClick={this.handleOnClick} className="btn btn-default btn-sm buttons">Like</button>
       <p>{this.state.likes}</p>
       <button onClick={this.callApi} className="btn btn-default btn-sm buttons">Call Api</button>
       <br />
     </div>
   )
 }
}

export default BookCard;
