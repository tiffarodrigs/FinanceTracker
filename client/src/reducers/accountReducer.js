import * as actionTypes from "../actions/ActionTypes";
const accounts = (state=[],action)=>{
  switch(action.type){
    case actionTypes.FETCH_ACCOUNT_SUCCESS:
    {
      const data = action.data.map((item) => ({
        ...item,
        label: item.nickName
      }))
      return data;
      // return[...action.data];
    }
    default:
      return state
  }
}
export {accounts};