import { combineReducers } from 'redux';
import { isModalShown, transactions } from './transactionReducer';
import {categories} from './categoryReducer';
import {transactionType} from './transactionTypeReducer';
import { accounts } from './accountReducer';
import { login } from './loginReducer';
import {setToken} from './../App';
import { accountTypes } from './accountsTypeReducer';

const rootReducer = combineReducers({

  isModalShown,
  transactions,
  categories,
  transactionType,
  accounts,
  login,
  accountTypes
 
});
export default rootReducer;
