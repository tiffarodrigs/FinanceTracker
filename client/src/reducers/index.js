import { combineReducers } from 'redux';
import { isModalShown, transactions } from './transactionReducer';
const rootReducer = combineReducers({
  isModalShown,
  transactions,
});
export default rootReducer;
