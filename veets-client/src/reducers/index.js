import { combineReducers } from 'redux';
import titlesReducer from './titlesReducer';

function popularTitleReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_POPULAR_TITLE':
      return state.concat(action.popularTitles)
    default:
      return state;
  }
};

function searhedTitleReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_SEARCHED_TITLE':
      return state.concat(action.searchedTitles)
    case 'CLEAR_SEARCHED_TITLES':
      return [];
    default:
      return state;
  }
};

function titleReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_TITLE':
      return state.concat(action.title)
    case 'CLEAR_TITLE':
      return [];
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  popularTitles: popularTitleReducer,
  searchedTitles: searhedTitleReducer,
  titles: titleReducer
})

export default rootReducer;
