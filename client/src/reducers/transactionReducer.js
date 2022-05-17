import * as actionTypes from '../actions/ActionTypes';
const transactions = (state = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_TRANSACTIONS_SUCCESS: {
      return [...action.data];
    }
    default:
      return state;
  }
};

const isModalShown = (state = false, action) => {
  switch (action.type) {
    case actionTypes.ADD_TRANSACTION:
      return true;
    case actionTypes.SAVE_TRANSACTION:
      return false;
    default:
      return state;
  }
};
export { isModalShown, transactions };
