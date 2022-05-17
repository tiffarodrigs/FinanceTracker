import * as actionTypes from "../actions/ActionTypes";
const accountTypes = (state=[],action)=>{
  switch(action.type){
    case actionTypes.FETCH_ACCOUNT_TYPE_SUCCESS:
    {
      return [...action.data]
    }
    default:
      return state
  }
}
export {accountTypes};