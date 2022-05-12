import React from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Create from './create';

const CreateTransaction = ({onClick, onCloseModal, isModalOpen, saveTransaction}) => (
  <div>
      <Button variant="outlined" onClick={onClick}>
        Add  Transaction
      </Button>
      <Dialog open={isModalOpen} onClose={onCloseModal}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <Create saveTransaction={saveTransaction}/>
        </DialogContent>
      </Dialog>
    </div>
);

export default CreateTransaction;