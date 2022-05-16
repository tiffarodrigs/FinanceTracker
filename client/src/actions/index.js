// This file contains the dispatcher

import { client } from '../api/client';
import * as actionTypes from './ActionTypes'


export const fetchTransactions = () => {
  return async dispatch => {
    const response = await client.get('http://localhost:5000/transactions',{});
    dispatch({type: actionTypes.FETCH_TRANSACTIONS_SUCCESS, data:response.data});
  }
}

export const saveTransaction = (payload) => {
  return dispatch => {
  console.log('Hello')
   client.post('http://localhost:5000/transactions/add',{...payload}).then((data) => {

    dispatch({type: actionTypes.SAVE_TRANSACTION});
    dispatch({type: actionTypes.SAVE_TRANSACTION_SUCCESS});
    dispatch(fetchTransactions());
   });

  }
};

export const addTransaction = () => ({
  type: actionTypes.ADD_TRANSACTION
});

// export const fetchTransaction = () => ({
//   type: actionTypes.FETCH_TRANSACTIONS
// });

export const fetchCategories = () => {
  return async dispatch => {
    const response = await client.get('http://localhost:5000/transaction/categories',{});
    dispatch({type : actionTypes.FETCH_CATEGORY_SUCCESS, data : response.data})


  }
}

export const fetchTransactionType=() => {
  return async dispatch => {
    const response = await client.get('http://localhost:5000/transaction/transactionType',{});
    dispatch({type : actionTypes.FETCH_TRANSACTION_TYPE_SUCCESS, data: response.data})
  }
}
export const fetchAccount=() => {
  return async dispatch => {
    const response = await client.get('http://localhost:5000/users/627ca7e3d894e4be9eee0da0/accounts',{});
    dispatch({type : actionTypes.FETCH_ACCOUNT_SUCCESS, data: response.data})
  }
}
export const validateUser=({name, password}) => {
  return async dispatch => {
    const response = await client.get(`http://localhost:5000/login?userName=${name}&password=${password}`,{});
    dispatch({type : actionTypes.USER_VALIDATE_SUCCESS, data: response.data})
  }
}
