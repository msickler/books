import {combineReducers} from 'redux';
import TitlesReducer from './titles_reducer';

const allReducers = combineReducers({
    titles: TitlesReducer
});

export default allReducers
