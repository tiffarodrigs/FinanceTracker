import React from "react";
import { Typography } from '@mui/material';

import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';


const DashboardTransaction = ({category,date,value, key})=>{
  return(
      <ListItem key={key}
      secondaryAction={
        <Typography style={{fontSize: "15px"}}variant="caption" align="right">
        ${value}
        </Typography>
         }>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={category} secondary={date} />
      </ListItem>
   
  );
}
export default DashboardTransaction;