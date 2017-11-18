import React from 'react';
import { Link } from 'react-router-dom'

const BookCard = ({ book, handleSubmit }) => (

  <div key={book.id} className="media book-card">
    <br/>
    <img className="img-thumbnail book-cover" src={book.img_url} alt={book.name} style={{ width:'50%' }}/>
    <h3 className="book-title">
      {book.id}. <Link to={`/books/${book.id}/edit`} className="links">
      {book.name}</Link>
      <button className="btn btn-sm buttons delete-button" type="delete" value={book.id} onClick={handleSubmit}>×</button>
    </h3>
    <Link to={`/books/${book.id}/edit`} className="edit-link"></Link>
    <p>Author: <span className="links">{book.author.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();})}</span></p>
    <p>Rating: {book.rating}/10 • Completed: {book.completed}</p>
    <br />
  </div>
)

export default BookCard;
