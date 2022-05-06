import React from "react";
import { Typography } from '@mui/material';
const DashboardTransaction = ({category,date,value})=>{
  return(
    <>
    <div>
      <Typography variant="subtitle2" align="left">
      {category}
      </Typography>
      <Typography variant="caption" align="left">
      {date}
      </Typography>
      <Typography variant="body2" align="right">
      {value}
      </Typography>
    </div>
    </>
  );
}
export default DashboardTransaction;