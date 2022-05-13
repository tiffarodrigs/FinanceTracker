import { combineReducers } from 'redux';
import { isModalShown, transactions } from './transactionReducer';
import {categories} from './categoryReducer';
import {transactionType} from './transactionTypeReducer';
const rootReducer = combineReducers({
  isModalShown,
  transactions,
  categories,
  transactionType
});
export default rootReducer;
