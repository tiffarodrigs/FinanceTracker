import { combineReducers } from 'redux';
import { isModalShown, transactions } from './transactionReducer';
import {categories} from './categoryReducer';
import {transactionType} from './transactionTypeReducer';
import { accounts } from './accountReducer';
import { login } from './loginReducer';
import {setToken} from './../App';

const rootReducer = combineReducers({

  isModalShown,
  transactions,
  categories,
  transactionType,
  accounts,
  login
 
});
export default rootReducer;
