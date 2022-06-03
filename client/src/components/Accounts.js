import React, { useCallback, useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import MyCard from './myCard';
import CreateAccount from './CreateAccount';

const Accounts = ({
  fetchTransactions,
  accounts = [],
  accountTypes,
  onSaveAccount,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleIsModalOpen = useCallback(() => {
    const flag = !isModalOpen;
    setIsModalOpen(flag);
  }, [setIsModalOpen,isModalOpen]);

  useEffect(() => {
    fetchTransactions();
  }, []);
  return (
    <>
      {accounts.map((account) => (
        <MyCard
          title={account.label}
          type={'medium'}
          content={account.value}
        />
      ))}

      <div>
        <Button variant='outlined' onClick={toggleIsModalOpen}>
          Add Accounts
        </Button>
        <Dialog open={isModalOpen} onClose={toggleIsModalOpen}>
          <DialogContent>
            <CreateAccount
              accountTypes={accountTypes}
              onSaveAccount={onSaveAccount}
            />
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};
export default Accounts;
