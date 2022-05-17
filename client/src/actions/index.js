// This file contains the dispatcher

import { client } from '../api/client';
import * as actionTypes from './ActionTypes'


export const fetchTransactions = () => {
  return async dispatch => {
    await dispatch(fetchCategories());
    await dispatch(fetchAccount());
    await dispatch(fetchAccountTypes());
    await dispatch(fetchTransactionType());
    const response = await client.get('http://localhost:5000/transactions',{});
    dispatch({type: actionTypes.FETCH_TRANSACTIONS_SUCCESS, data:response.data});
  }
}

export const saveTransaction = (payload) => {
  return dispatch => {
   client.post('http://localhost:5000/transactions/add',{...payload}).then((data) => {
    dispatch({type: actionTypes.SAVE_TRANSACTION});
    dispatch(fetchTransactions());
   });

  }
};

export const addTransaction = () => ({
  type: actionTypes.ADD_TRANSACTION
});

export const fetchCategories = () => {
  return async dispatch => {
    const response = await client.get('http://localhost:5000/transaction/categories',{});
    dispatch({type : actionTypes.FETCH_CATEGORY_SUCCESS, data : response.data});
  }
}

export const fetchTransactionType=() => {
  return async dispatch => {
    const response = await client.get('http://localhost:5000/transaction/transactionType',{});
    dispatch({type : actionTypes.FETCH_TRANSACTION_TYPE_SUCCESS, data: response.data})
  }
}

export const fetchAccountTypes=() => {
  return async dispatch => {
    const response = await client.get('http://localhost:5000/accounts/types',{});
    dispatch({type : actionTypes.FETCH_ACCOUNT_TYPE_SUCCESS, data: response.data})
  }
}

export const saveAccount=(payload) => {
  return async dispatch => {
    const userId = '627ca7e3d894e4be9eee0da0'
    const response = await client.post(`http://localhost:5000/users/${userId}/accounts/create`,{...payload}); // TODO: revisit and get real time user id
    dispatch({type : actionTypes.SAVE_ACCOUNT_SUCCESS, data: response.data});
    dispatch(fetchAccount);
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
    if(response?.data?.token)
      sessionStorage.setItem('token', response.data.token);
    dispatch({type : actionTypes.USER_VALIDATE_SUCCESS, data: response.data})
  }
}
