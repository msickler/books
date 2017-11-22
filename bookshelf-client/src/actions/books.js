import { resetBookForm } from './bookForm';
import fetch from 'isomorphic-fetch';

const API_URL = process.env.REACT_APP_API_URL;

const setBooks = books => {
  return {
    type: 'GET_BOOKS_SUCCESS',
    books
  }
}

export const getBooks = () => {
  return dispatch => {
    dispatch({ type: 'LOADING_BOOKS' })
    return fetch(`${API_URL}/books`)
      .then(response => response.json())
      .then(books => dispatch(setBooks(books)))
      .catch(error => console.log(error))
  }
}

export const increment = (key)  => {
  return {
    type: 'INCREMENT_LIKES',
    key
  }
}

const addBook = book => {
  return {
    type: 'CREATE_BOOK_SUCCESS',
    book
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

export function deleteBook(id) {
   return (dispatch) => {
     dispatch({ type: 'DELETE_BOOK' })
     return fetch(`${API_URL}/books/${id}`, {
       method:'DELETE',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       },
       body: JSON.stringify({ id: id })
     })
     .then((res) => res.json())
     .then((responseJson) => {dispatch({ type: 'SUCCESSFULLY_DELETED_BOOK', payload: responseJson})
       return responseJson
     })
   }
 }

 export function editBook(book) {
    return (dispatch) => {
      dispatch({ type: 'EDIT_BOOK' })
      return fetch(`${API_URL}/books/${book.id}`, {
        method:'PATCH',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: book.id,
          name: book.name,
          author: book.author,
          img_url: book.img_url,
          rating: book.rating,
          completed: book.completed,
          likes: book.likes
        })
      })
      .then((res) => res.json())
      .then((responseJson) => {dispatch({ type: 'SUCCESSFULLY_EDITED_BOOK', payload: responseJson })
      return responseJson
      })
    }
  }

  export function addLikes(book) {
     return (dispatch) => {
       dispatch({ type: 'ADD_LIKE' })
       return fetch(`${API_URL}/books/${book.id}`, {
         method:'PATCH',
         headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'
         },
         body: JSON.stringify({
           likes: book.likes
         })
       })
       .then((res) => res.json())
       .then((responseJson) => {dispatch({ type: 'SUCCESSFULLY_ADDED_LIKE', payload: responseJson })
       return responseJson
       })
     }
   }
