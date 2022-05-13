import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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

const Record = (props) => (
  <tr>
    <td>{props.record.transactionType}</td>
    <td>{props.record.category}</td>
    <td>{props.record.date}</td>
    <td>$ {props.record.value}</td>
    <td>
      <Link className='btn btn-link' to={`/edit/${props.record._id}`}>
        Edit
      </Link>{' '}
      |
      <button
        className='btn btn-link'
        onClick={() => {
          props.deleteRecord(props.record._id);
        }}
      >
        Delete
      </button>
    </td>
  </tr>
);

export default function RecordList({fetchTransactions}) {
  const [records, setRecords] = useState([]);
  // This method fetches the records from the database.
  useEffect(() => {
    fetchTransactions()
  }, []);

  // This method will delete a record
  async function deleteRecord(id) {
    await fetch(`http://localhost:5000/${id}`, {
      method: 'DELETE',
    });

    const newRecords = records.filter((el) => el._id !== id);
    setRecords(newRecords);
  }

  // This method will map out the records on the table
  function recordList() {
    return records.map((record) => {
      return (
        <Record
          record={record}
          deleteRecord={() => deleteRecord(record._id)}
          key={record.id}
        />
      );
    });
  }

  // This following section will display the table with the records of individuals.
  return (
    <>
    <Paper sx={{ width: '100%' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table sx={{ minWidth: 650 }} stickyHeader aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell align='right'>Account</TableCell>
              <TableCell align='right'>Transaction Type</TableCell>
              <TableCell align='right'>Category</TableCell>
              <TableCell align='right'>Date</TableCell>
              <TableCell align='right'>Notes</TableCell>
              <TableCell align='right'>Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {records.map((record) => {
              return (
                <TableRow
                  key={record.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component='span' scope='row' align='right'>
                    {record.account}
                  </TableCell>
                  <TableCell align='right'>{record.transactionType}</TableCell>
                  <TableCell align='right'>{record.category}</TableCell>
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
    </>
  );
}
