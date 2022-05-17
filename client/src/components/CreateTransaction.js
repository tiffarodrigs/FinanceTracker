import React from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Create from './create';

const CreateTransaction = ({onClick, onCloseModal, isModalOpen, saveTransaction, categories,transactionType,accounts}) => {
  return (
  <div style={{width: '95%', margin:'auto'}}>
      <Button variant="outlined" onClick={onClick}>
        Add  Transaction
      </Button>
      <Dialog open={isModalOpen} onClose={onCloseModal}>
        <DialogContent>
          <Create saveTransaction={saveTransaction} categories={categories} transactionType = {transactionType} accounts ={accounts}/>
        </DialogContent>
      </Dialog>
    </div>
)};

export default CreateTransaction;