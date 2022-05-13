/*
1.create reducer
import that reducer in root reducer(which is already in store)
2.create action => index.js
3.create thunk
4. create connect
*/
import * as actionTypes from "../actions/ActionTypes";
const categories = (state=[],action)=>{
  switch(action.type){
    case actionTypes.FETCH_CATEGORY_SUCCESS:
    {
      return[...action.data]
    }
    default:
      return state
  }
}
export {categories};