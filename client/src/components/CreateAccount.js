import React, { useState } from 'react';
import BasicSelect from './selectComponent';
import { TextField, InputLabel, Input, InputAdornment } from '@mui/material';
import BasicDatePicker from './basicDatePickerComponent';

export default function CreateAccount({accountTypes}) {
  const [accountType, setAccountType] = useState('');
  const [startingBalance, setStartingBalalnce] = useState(0);
  const [accountNickName, setAccountNickName] = useState('');
  return (
    <form>
      <InputLabel htmlFor='standard-adornment-amount'>Account Nick Name</InputLabel>
      <Input
        id='standard-adornment-amount'
        value={accountNickName}
        onChange={(e) => setAccountNickName(e.target.value)}
      />
      <BasicSelect
        items={accountTypes}
        displayLabel='Account Type'
        label='accountType'
        selectedValue={accountType}
        onChange={(e) => setAccountType(e.target.value)}
      />
      <InputLabel htmlFor='standard-adornment-amount'>Balance</InputLabel>
      <Input
        type='number'
        id='standard-adornment-amount'
        value={startingBalance}
        onChange={(e) => setStartingBalalnce(e.target.value)}
        startAdornment={<InputAdornment position='start'>$</InputAdornment>}
      />
    </form>
  );
}
