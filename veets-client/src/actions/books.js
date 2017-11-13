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

//export const deleteBook = book => {
//  return dispatch => {
//    return fetch(`${API_URL}/books`, {
//      method: "DELETE",
//      headers: {

  //      'Content-Type': 'application/json'
  //    },
  //    body: JSON.stringify({ book: book })
  //  })
  //  .then(response => response.json())
  //}
//}

export function deleteBook(id) {
   return (dispatch) => {
     dispatch({ type: 'DELETE_BOOK' });
     return fetch(`/api/books/${id}`, {
       method:'DELETE',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       },
       body: JSON.stringify({
         id: id
       })
     })
     .then((res) => res.json())
     .then((responseJson) => {dispatch({ type: 'SUCCESSFULLY_DELETED_BOOK', payload: responseJson})
       return responseJson;
     })
   }
 }
