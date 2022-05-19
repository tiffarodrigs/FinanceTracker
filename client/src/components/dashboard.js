import React, { useEffect } from 'react';
import MyCard from './myCard';
import MiniStatement from './MiniStatement';
import OutlinedCard from './OutlinedCard';
import TransactionCard from './TransactionCard'

import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';

const Dashboard = ({ fetchTransactions, transactions, balance, accounts }) => {
  useEffect(() => {
    fetchTransactions();
  }, []);
  return (
    <div style={{ display: 'flex', padding: '5px' }}>
      <MyCard title={'Total Balance'} content={`$${balance}`} />
      <MyCard title={'income'} content={'$7000'} />
      <MyCard
        type='wide'
        title={'Transaction History'}
        content={<MiniStatement transactions={transactions} />}
      />
      <OutlinedCard header='Accounts' summary={`$ ${balance.toFixed(2)}`} data={accounts} showMore={<Link to={'/accounts'}><Typography>Show More</Typography></Link>}/>
      {/* <OutlinedCard header='Transactions' data={transactions} showMore={<Link to={'/transaction'}><Typography>More Transactions</Typography></Link>}/> */}
     <TransactionCard header='Transactions' data={transactions} showMore={<Link to={'/transaction'}><Typography>More Transactions</Typography></Link>}/>

    </div>
  );
};
export default Dashboard;
