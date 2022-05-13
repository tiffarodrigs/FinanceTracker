import * as actionTypes from "../actions/ActionTypes";
const account = (state=[],action)=>{
  switch(action.type){
    case actionTypes.FETCH_ACCOUNT_SUCCESS:
    {
      return[...action.data]
    }
    default:
      return state
  }
}
export {account};