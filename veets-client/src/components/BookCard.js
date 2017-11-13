import React from 'react';


const BookCard = ({ book,
  handleOnClick = () => {
      this.props.store.dispatch({
        type: 'DELETE_BOOK',
        id: this.props.id
      });
    }
 }) => (
  <div key={book.id} className="centered-col media">
  <div className="centered-col">
    <img className="img-thumbnail" src={book.img_url} alt={book.name} style={{ width:'50%' }}/>
      <h3 className="">{book.name}</h3>
      <p>Author: {book.author}</p>
      <p>Rating: {book.rating}</p>
      <button className="btn btn-default btn-xs" onClick={this.handleOnClick}>delete</button>
  </div>
  <hr/>
  </div>
)

export default BookCard;
