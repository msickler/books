const ADD_LIKE = 'ADD_LIKE';
export const addLike = (id) => ({type:ADD_LIKE, id});

export default (state = [], action) => {
  switch(action.type) {

    case 'LOADING_BOOKS':
     return state

    case 'GET_BOOKS_SUCCESS':
      return action.books

    case 'INCREMENT_LIKES':
      const i = action.id
      return [
        ...state.slice(0, i),
        {...state[i], likes: state[i].likes + 1 },
        ...state.slice(i + 1),
      ]

    case 'CREATE_BOOK_SUCCESS':
      return state.concat(action.book)

    case 'DELETE_BOOK':
      return state

    case 'SUCCESSFULLY_DELETED_BOOK':
      return action.payload

    case 'EDIT_BOOK':
      return state

    case 'SUCCESSFULLY_EDITED_BOOK':
      return action.payload

      case 'ADD_LIKE':
        state = state.map(book => book.id === action.id ? { ...book, likes: book.likes+1 } : book)
        return state

      case 'SUCCESSFULLY_ADDED_LIKE':
        return state.concat(action.book)

    default:
      return state;
  }
}
