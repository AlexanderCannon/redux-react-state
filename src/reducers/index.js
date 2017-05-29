//3rd party
import { combineReducers } from 'redux';
//Ours
import Books from './Books'
import ActiveBook from './ActiveBook'

const rootReducer = combineReducers({
  books: Books,
  activeBook: ActiveBook
});

export default rootReducer;
