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
   client.post('http://localhost:5000/transactions/add',{body:JSON.stringify(payload)}).then((data) => {

    dispatch({type: actionTypes.SAVE_TRANSACTION});
    dispatch({type: actionTypes.SAVE_TRANSACTION_SUCCESS});
    dispatch(fetchTransactions());
   });

  }
};

export const addTransaction = () => ({
  type: actionTypes.ADD_TRANSACTION
});

export const fetchTransaction = () => ({
  type: actionTypes.FETCH_TRANSACTIONS
})

