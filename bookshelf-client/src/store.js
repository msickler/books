import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import books from './reducers/books';
import bookFormData from './reducers/bookFormData';

const reducers = combineReducers({
  books,
  bookFormData
});

const middleware = [thunk];

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware),
);
