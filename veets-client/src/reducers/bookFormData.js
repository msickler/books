const initialState = {
  name: '',
  author: '',
  img_url: '',
  rating: 0,
  completed: ''
}

export default (state = initialState, action) => {

  switch(action.type) {
    case 'UPDATED_DATA':
      return action.bookFormData;

    case 'RESET_BOOK_FORM':
      return initialState;

    default:
      return state;
  }
}
