import React from "react";
import { Typography } from '@mui/material';

import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';


const DashboardTransaction = ({category,date,value})=>{
  return(
    <>
      <ListItem
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
   
  
      {/* <Typography variant="subtitle2" align="left">
      {category}
      </Typography>
      <Typography style={{fontSize: "11px"}}variant="caption" align="left">
      {date}
      </Typography>
      <Typography style={{fontSize: "15px"}}variant="caption" align="right">
      ${value}
      </Typography> */}
   
    </>
  );
}
export default DashboardTransaction;