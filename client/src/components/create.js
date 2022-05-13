import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import BasicSelect from './selectComponent';
//import MenuItem from '@mui/material/MenuItem';
//import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
// import ResponsiveDatePickers from './datePickerComponent';


export default function Create({saveTransaction,categories,transactionType}) {
  const [form, setForm] = useState({
    transactionType: '',
    category: '',
    date: '',
    value: '',
  });
  // const navigate = useNavigate();

  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();
    saveTransaction({...form})

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

    // console.log(res)
    setForm({ transactionType: '',
    category: '',
    date: '',
    value: '', });
    //onCreate();
  }

  // This following section will display the form that takes the input from the user.
  return (
    <div>
      <h3>Create New Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          {/* <label htmlFor='transactionType'>Transaction Type</label>
          <input
            type='text'
            className='form-control'
            id='transactionType'
            value={form.transactionType}
            onChange={(e) => updateForm({ transactionType: e.target.value })}
          /> */}
          <BasicSelect items={transactionType} displayLabel ="Transaction Type" label="Transaction"selectedValue="Expense" id="123"/>
        </div>
        <div className='form-group'>
          <BasicSelect items={categories} displayLabel ="Category" label="Category"selectedValue="Utilities" id="123"/>
        </div>
        <div className='form-group'>
        {/* <DatePickerComponent/> */}
          <label htmlFor='date'>Date</label>
          <input
            type='text'
            className='form-control'
            id='date'
            value={form.date}
            onChange={(e) => updateForm({ date: e.target.value })}
          />
        </div>

        <div className='form-group'>
          <label htmlFor='value'>Amount</label>
          {/* <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} />
          <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
          <Input
            id="standard-adornment-amount"
            value={values.amount}
            onChange={handleChange('amount')}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          /> */}
          <input
            type='text'
            className='form-control'
            id='value'
            value={form.value}
            onChange={(e) => updateForm({ value: e.target.value })}
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
