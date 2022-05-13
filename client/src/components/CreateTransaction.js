import React, { useEffect } from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Create from './create';

const CreateTransaction = ({onClick, onCloseModal, isModalOpen, saveTransaction, fetchCategories, categories,transactionType,fetchTransactionType,account,fetchAccount}) => {
  useEffect(() => {
    fetchCategories();
    fetchTransactionType();
    fetchAccount();
  },[])
  return (
  <div>
      <Button variant="outlined" onClick={onClick}>
        Add  Transaction
      </Button>
      <Dialog open={isModalOpen} onClose={onCloseModal}>
        <DialogContent>
          <Create saveTransaction={saveTransaction} categories={categories} transactionType = {transactionType} account ={account}/>
        </DialogContent>
      </Dialog>
    </div>
)};

export default CreateTransaction;