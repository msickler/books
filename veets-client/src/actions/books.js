import { resetBookForm } from './bookForm';

const API_URL = process.env.REACT_APP_API_URL;

const setBooks = books => {
  return {
    type: 'GET_BOOKS_SUCCESS',
    books
  }
}

const addBook = book => {
  return {
    type: 'CREATE_BOOK_SUCCESS',
    book
  }
}

export const getBooks = () => {
  return dispatch => {
    return fetch(`${API_URL}/books`)
      .then(response => response.json())
      .then(books => dispatch(setBooks(books)))
      .catch(error => console.log(error));
  }
}

export const createBook = book => {
  return dispatch => {
    return fetch(`${API_URL}/books`, {
      method: "POST",
      headers: {

        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ book: book })
    })
      .then(response => response.json())
      .then(book => {
        dispatch(addBook(book))
        dispatch(resetBookForm())
      })
      .catch(error => console.log(error))
  }
}

export const deleteBook = book => {
  return dispatch => {
    return fetch(`${API_URL}/books`, {
      method: "DELETE",
      headers: {

        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ book: book })
    })
    .then(response => response.json())
  }
}
