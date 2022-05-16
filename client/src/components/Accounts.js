import React, { useCallback, useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import MyCard from './myCard';
import CreateAccount from './CreateAccount'

const Accounts = ({fetchAccount,fetchTransactions, accounts = []}) =>
{

  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleIsModalOpen = useCallback(()=>{
    setIsModalOpen(!isModalOpen)
  },[setIsModalOpen])

  useEffect(()=>{
    fetchAccount();
    fetchTransactions();
    

  },[])
  return(
   <>
   {accounts.map((element) =>
  (<MyCard title={element.label} type={"medium"} content={element.currentBalance}/>) )}
    
    <div>
      <Button variant="outlined" onClick={toggleIsModalOpen}>
        Add  Accounts
      </Button>
      <Dialog open={isModalOpen} onClose={toggleIsModalOpen}>
        <DialogContent>
          <CreateAccount />
        </DialogContent>
      </Dialog>
    </div>
    </>

  )
}
export default Accounts;