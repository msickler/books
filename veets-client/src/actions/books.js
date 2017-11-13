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

const setBook = book => {
  return {
    type: 'GET_BOOK_SUCCESS',
    book
  }
}

export const getBook = (id) => {
  return dispatch => {
    return fetch(`${API_URL}/books/${id}`)
      .then(response => response.json())
      .then(book => dispatch(setBook(book)))
      .catch(error => console.log(error));
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
       return responseJson;
     })
   }
 }

 export function editBook(book) {
    return (dispatch) => {
      dispatch({ type: 'EDIT_BOOK' });
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
          rating: book.rating
        })
      })
      .then((res) => res.json())
      .then((responseJson) => {dispatch({ type: 'SUCCESSFULLY_EDITED_BOOK', payload: responseJson })
      return responseJson;
      })
    }
  }
