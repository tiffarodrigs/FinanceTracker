import React, { useState } from 'react';
import { useNavigate } from 'react-router';

export default function Create({onCreate}) {
  const [form, setForm] = useState({
    transactionType: '',
    category: '',
    date: '',
    value: '',
  });
  const navigate = useNavigate();

  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();

    // When a post request is sent to the create url, we'll add a new record to the database.
    const newTransaction = { ...form };

    await fetch('http://localhost:5000/transactions/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTransaction),
    }).catch((error) => {
      window.alert(error);
      return;
    });

    setForm({ transactionType: '',
    category: '',
    date: '',
    value: '', });
    onCreate();
  }

  // This following section will display the form that takes the input from the user.
  return (
    <div>
      <h3>Create New Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='transactionType'>Transaction Type</label>
          <input
            type='text'
            className='form-control'
            id='transactionType'
            value={form.transactionType}
            onChange={(e) => updateForm({ transactionType: e.target.value })}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='category'>Category</label>
          <input
            type='text'
            className='form-control'
            id='category'
            value={form.category}
            onChange={(e) => updateForm({ category: e.target.value })}
          />
        </div>
        <div className='form-group'>
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
