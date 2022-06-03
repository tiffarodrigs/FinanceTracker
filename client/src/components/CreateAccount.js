import React, { useState } from 'react';
import BasicSelect from './selectComponent';
import Box from '@mui/material/Box';

import { Button, InputLabel, Input, InputAdornment,TextField } from '@mui/material';

export default function CreateAccount({ accountTypes, onSaveAccount }) {
  const [accountType, setAccountType] = useState('');
  const [startingBalance, setStartingBalalnce] = useState(0);
  const [accountNickName, setAccountNickName] = useState('');
  return (
    <>
    <Box
      
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
    <TextField id="standard-adornment-amount" label="Account Nick Name" variant="outlined"     value={accountNickName}
        onChange={(e) => setAccountNickName(e.target.value)}/>
     
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
      <Button
        variant='outlined'
        onClick={() => {
          onSaveAccount({ accountType, startingBalance, accountNickName });
        }}
      >
        Save
      </Button>
      
      </Box>
    </>
  );
}
