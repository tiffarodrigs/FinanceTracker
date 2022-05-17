import React, { useEffect } from 'react';
import MyCard from './myCard';
import MiniStatement from './MiniStatement';

const Dashboard = ({ fetchTransactions, transactions, balance }) => {
  useEffect(() => {
    fetchTransactions();
  }, []);
  return (
    <div style={{ display: 'flex', padding: '5px' }}>
      <MyCard title={'savings'} content={`$${balance}`} />
      <MyCard title={'income'} content={'$7000'} />
      <MyCard
        type='wide'
        title={'Transaction History'}
        content={<MiniStatement transactions={transactions} />}
      />
    </div>
  );
};
export default Dashboard;
