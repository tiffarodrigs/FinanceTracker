import React from 'react';
import List from '@mui/material/List';
import DashboardTransaction from './dashbordTransaction';

const MiniStatement = ({ transactions = [] }) => {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {transactions.map(({ category, date, value, id }) => {
        return (
          <DashboardTransaction
            key={id}
            category={category?.label}
            date={date}
            value={value}
          />
        );
      })}
    </List>
  );
};

export default MiniStatement;
