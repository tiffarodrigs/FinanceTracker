import React from 'react';
import {
  Typography,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';

const DashboardTransaction = ({ category, date, value, key }) => {
  return (
    <ListItem
      key={key}
      secondaryAction={
        <Typography
          style={{ fontSize: '15px' }}
          variant='caption'
          align='right'
        >
          ${value}
        </Typography>
      }
    >
      <ListItemAvatar>
        <Avatar>
          <ImageIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={category} secondary={date} />
    </ListItem>
  );
};
export default DashboardTransaction;
