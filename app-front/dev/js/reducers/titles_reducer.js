import {GET_TITLES} from '../actions/index';

const INITIAL_STATE = {all: [], title:null};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_TITLES:
      return {[...state, all:action.payload.data] }
    default:
      return state
  }
}
