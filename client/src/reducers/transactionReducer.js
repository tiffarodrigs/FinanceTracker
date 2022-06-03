import * as actionTypes from '../actions/ActionTypes';
const transactions = (state = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_TRANSACTIONS_SUCCESS: {
      console.log(action.data)
      return [...action.data];
    }
    default:
      return state;
  }
};

const isModalShown = (state = false, action) => {
  switch (action.type) {
    case actionTypes.ADD_ACCOUNT:
    case actionTypes.ADD_TRANSACTION:
      return true;
    case actionTypes.SAVE_TRANSACTION:
    case actionTypes.SAVE_ACCOUNT_SUCCESS:
    case actionTypes.CLOSE_MODAL:
      return false;
    default:
      return state;
  }
};
export { isModalShown, transactions };
