import { combineReducers } from 'redux';
import { isModalShown, transactions } from './transactionReducer';
import {categories} from './categoryReducer';
import {transactionType} from './transactionTypeReducer';
import { accounts } from './accountReducer';
const rootReducer = combineReducers({

  isModalShown,
  transactions,
  categories,
  transactionType,
  accounts
});
export default rootReducer;
