import * as actionTypes from "../actions/ActionTypes";
const login = (state=[],action) =>{
  switch(action.type){
    case actionTypes.USER_VALIDATE_SUCCESS:
      // {
      //   return[...action.data]
      // }
      {
        const data = action.data.map((item) => ({
          ...item,
          token: item.setToken
        }))
        return data;
      }
      default:
        return state
  }
}
export {login};