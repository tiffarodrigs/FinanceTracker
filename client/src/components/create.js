import React, { useState } from 'react';
import { TextField, InputLabel, Input, InputAdornment } from '@mui/material';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import BasicSelect from './selectComponent';
import BasicDatePicker from './basicDatePickerComponent';

export default function Create({
  saveTransaction,
  categories,
  transactionType,
  accounts,
}) {
  const [form, setForm] = useState({
    account: '',
    transactionType: '',
    category: '',
    date: '',
    value: '',
  });
  // const navigate = useNavigate();

  // These methods will update the state properties.
  function updateForm(value) {
    console.log('value', value);
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();
    saveTransaction({ ...form });

    // When a post request is sent to the create url, we'll add a new record to the database.
    // const newTransaction = { ...form };

    // const res = await fetch('http://localhost:5000/transactions/add', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(newTransaction),
    // }).catch((error) => {
    //   return;
    // });

    setForm({
      account: '',
      transactionType: '',
      category: '',
      date: '',
      value: '',
    });
  }

  // This following section will display the form that takes the input from the user.
  return (
    <div>
      <h3>Create New Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <BasicSelect
            items={accounts}
            displayLabel='Account'
            label='account'
            selectedValue={form.account}
            onChange={(e) => updateForm({ account: e.target.value })}
          />
        </div>
        <div className='form-group'>
          <BasicSelect
            items={transactionType}
            displayLabel='Transaction Type'
            label='transactionType'
            selectedValue={form.transactionType}
            onChange={(e) => updateForm({ transactionType: e.target.value })}
          />
        </div>
        <div className='form-group'>
          <BasicSelect
            items={categories}
            displayLabel='Category'
            label='Category'
            selectedValue={form.category}
            id='123'
            onChange={(e) => updateForm({ category: e.target.value })}
          />
        </div>
        <div className='form-group'>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Transaction Date"
        value={form.date}
        onChange={(newValue) =>  (updateForm({date: newValue}))
        }
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>

        </div>
        <div className='form-group'>
          <InputLabel htmlFor='standard-adornment-amount'>Amount</InputLabel>
          <Input
            type='number'
            id='standard-adornment-amount'
            value={form.values}
            onChange={(e) => updateForm({ value: e.target.value })}
            startAdornment={<InputAdornment position='start'>$</InputAdornment>}
          />
        </div>
        <div className='form-group'>
          <input
            type='submit'
            value='Create transaction'
            className='btn btn-primary'
          />
        </div>
      </form>
    </div>
  );
}
