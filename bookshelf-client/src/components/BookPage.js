import React from 'react';

const BookPage = ({ match }) => (
  <div>
    <h2>Book: {match.params.book}</h2>
  </div>
)

export default BookPage 
