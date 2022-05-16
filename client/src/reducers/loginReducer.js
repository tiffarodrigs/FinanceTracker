import * as actionTypes from "../actions/ActionTypes";
const login = (state=[],action) =>{
  switch(action.type){
    case actionTypes.USER_VALIDATE_SUCCESS:
      {
        return action.data ;
      }
      default:
        return state
  }
}
export {login};