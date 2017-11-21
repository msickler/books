import React from 'react';

const BookOpen = ({ book }) => (

  <div key={book.id} className="">
    <li className="open-books lists"
      style={{ fontSize: '16px', textAlign: 'left', paddingLeft: '40px'}}>
      {book.id}.
      <span style={{ color: '#777'}}>{book.name}</span> ||
      <span style={{ color: '#777'}}>By: {book.author}</span>
    </li>
  </div>
)

export default BookOpen;
