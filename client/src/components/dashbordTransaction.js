import React from "react";
import { Typography } from '@mui/material';
const DashboardTransaction = ({category,date,value})=>{
  return(
    <>
    <div >
      <Typography variant="subtitle2" align="left">
      {category}
      </Typography>
      <Typography style={{fontSize: "11px"}}variant="caption" align="left">
      {date}
      </Typography>
      <Typography style={{fontSize: "15px"}}variant="caption" align="right">
      {value}
      </Typography>
    </div>
    </>
  );
}
export default DashboardTransaction;