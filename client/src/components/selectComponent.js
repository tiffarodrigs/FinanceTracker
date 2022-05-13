import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({
  items = [],
  displayLabel,
  label,
  selectedValue,
  id,
  onChange,
}) {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id={`${displayLabel}-${label}`}>{displayLabel}</InputLabel>
        <Select
          labelId={`${displayLabel}-${label}`}
          id={id}
          value={selectedValue}
          label={label}
          onChange={onChange}
        >
          {items.map((element) => (
            <MenuItem value={element.label}>{element.label}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
