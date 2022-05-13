import * as actionTypes from '../actions/ActionTypes';
const transactions = (state=[],action)=>{
  switch(action.type){
    case 'FETCH_TRANSACTIONS_SUCCESS':
      {
        return [...action.data];
      }
  // case 'DELETE_TRANSACTION':
  //   let newState = { ...state };
  //   delete newState[id];
  //   return newState;

  // case 'UPDATE_TRANSACTION':
  //   let updatedState = Object.assign({},state,{id :_id});
  //   //const newTicket = Object.assign({}, state[id], {formattedWaitTime});
  //   //const updatedState = Object.assign({}, state, {
  //    // [id]: newTicket

  //   return updatedState;
    default:
      return state;
}
}

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
