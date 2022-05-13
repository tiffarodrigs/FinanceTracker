import React, { useEffect } from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Create from './create';

const CreateTransaction = ({onClick, onCloseModal, isModalOpen, saveTransaction, fetchCategories, categories,transactionType,fetchTransactionType}) => {
  useEffect(() => {
    fetchCategories();
    fetchTransactionType();
  },[])
  return (
  <div>
      <Button variant="outlined" onClick={onClick}>
        Add  Transaction
      </Button>
      <Dialog open={isModalOpen} onClose={onCloseModal}>
        {/* <DialogTitle>Subscribe</DialogTitle> */}
        <DialogContent>
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText> */}
          <Create saveTransaction={saveTransaction} categories={categories} transactionType = {transactionType}/>
        </DialogContent>
      </Dialog>
    </div>
)};

export default CreateTransaction;