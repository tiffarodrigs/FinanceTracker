import { combineReducers } from 'redux';
import { isModalShown, transactions } from './transactionReducer';
import {categories} from './categoryReducer';
const rootReducer = combineReducers({
  isModalShown,
  transactions,
  categories
});
export default rootReducer;
