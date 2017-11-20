export default (state = [], action) => {
  switch(action.type) {

    case 'LOADING_BOOKS':
     return state

    case 'GET_BOOKS_SUCCESS':
      return action.books;

    case 'CREATE_BOOK_SUCCESS':
      return state.concat(action.book);

    case 'DELETE_BOOK':
      return state

    case 'SUCCESSFULLY_DELETED_BOOK':
      return action.payload

    case 'EDIT_BOOK':
      return state

    case 'SUCCESSFULLY_EDITED_BOOK':
      return action.payload

    default:
      return state;
  }
}
