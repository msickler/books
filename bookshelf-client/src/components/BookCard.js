import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

const BookCard = ({ book, handleSubmit }) => (

  <div key={book.id} className="media book-card">
{  console.log(handleSubmit)}
    <img className="img-thumbnail book-cover" src={book.img_url} alt={book.name} style={{ width:'50%' }}/>
    <h3 className="book-title">
      {book.id}. <a className="links" href={`/books/${book.id}`}>{book.name}</a>
    </h3>
    <p>Author: <span className="links">{book.author.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();})}</span></p>
    <p>Rating: {book.rating}/10 • Completed: {book.completed}</p>
    <br />
    <Link to={`/books/${book.id}/edit`}>Edit</Link>
    <button className="btn btn-default btn-sm buttons" type="delete" value={book.id} onClick={handleSubmit}>delete</button>

  </div>
)

export default BookCard;
