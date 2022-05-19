import React, { useCallback, useState } from 'react';
import { TextField, InputLabel, Input, InputAdornment } from '@mui/material';
import Button from '@mui/material/Button';
export default function Login({ validateUser, setToken, token }) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const onChangeUserName = useCallback((e) => {
    setName(e.target.value);
  }, []);
  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  async function onSubmit(e) {
    e.preventDefault();
    validateUser({ name, password });
  }

  return (
    <div>
      <h3>LOGIN</h3>
      <div className='form-group'>
        <TextField
          id='filled-search'
          label='User Name'
          type='text'
          variant='filled'
          value={name}
          onChange={onChangeUserName}
        />
      </div>
      <TextField
        id='filled-password-input'
        label='Password'
        type='password'
        autoComplete='current-password'
        variant='filled'
        value={password}
        onChange={onChangePassword}
      />

      <Button onClick={onSubmit} variant='outlined'>
        LOGIN
      </Button>
    </div>
  );
}
