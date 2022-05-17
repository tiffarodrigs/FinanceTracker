import React, { useEffect } from 'react';
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@mui/material';
import ConnectedCreateTransaction from './ConnectedCreateTransaction';

export default function RecordList({fetchTransactions, transactions}) {
  // This method fetches the transactions from the database.
  useEffect(() => {
    fetchTransactions();
  }, []);

  // This following section will display the table with the transactions of individuals.
  return (
    <div style={{width: '95%', margin:'auto'}}>
    <Paper sx={{ width: '95%' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table sx={{ minWidth: 650 }} stickyHeader aria-label='simple table'>
          <TableHead  key='redordLIst-header'>
            <TableRow key='redordLIst-header'>
              <TableCell align='right'>Account</TableCell>
              <TableCell align='right'>Transaction Type</TableCell>
              <TableCell align='right'>Category</TableCell>
              <TableCell align='right'>Date</TableCell>
              <TableCell align='right'>Notes</TableCell>
              <TableCell align='right'>Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((record) => {
              return (
                <TableRow
                  key={record._id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell scope='row' align='right'>
                    {record?.account?.label}
                  </TableCell>
                  <TableCell align='right'>{record?.transactionType?.label}</TableCell>
                  <TableCell align='right'>{record?.category?.label}</TableCell>
                  <TableCell align='right'>{record.date}</TableCell>
                  <TableCell align='right'>{record.note}</TableCell>
                  <TableCell align='right'>
                    $ {record.value ? Number(record.value).toFixed(2) : '0.00'}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
    <ConnectedCreateTransaction />
    </div>
  );
}
