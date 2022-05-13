import * as actionTypes from "../actions/ActionTypes";
const transactionType = (state=[],action)=>{
  switch(action.type){
    case actionTypes.FETCH_TRANSACTION_TYPE_SUCCESS:
    {
      return[...action.data]
    }
    default:
      return state
  }
}
export {transactionType};