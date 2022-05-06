import React,{useEffect, useState} from "react";
// import {
//   TableContainer,
//   Paper,
//   Table,
//   TableHead,
//   TableBody,
//   TableRow,
//   TableCell,
// } from '@mui/material';
import DashboardTransaction from "./dashbordTransaction";

const MiniStatement = () => {
  const [records, setRecords] = useState([]);
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:5000/transactions/`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
      const records = await response.json();
      setRecords(records.splice(0,5));
    }
    getRecords();
    return;
  }, [records.length]);
  return (
    records.map(({category, date, value})=>{return(
  <>
      <div>
        <DashboardTransaction category={category} date={date} value={value}/>
        {/* <DashboardTransaction record={row}/> */}

      </div>
      </>)
    }))
  // <TableContainer component={Paper}>
  //   <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
  //     <TableHead>
  //       <TableRow>
  //         <TableCell align="right">Transaction type</TableCell>
  //         <TableCell align="right">Category</TableCell>
  //         <TableCell align="right" >Amount</TableCell>
        
  //       </TableRow>
  //     </TableHead>
  //     <TableBody>
  //       {records.map((row) => (
  //         <TableRow
  //           key={row.id}
  //           sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
  //         >
  //           <TableCell align="right">{row.transactionType}</TableCell>
  //           <TableCell align="right">{row.category}</TableCell>
  //           <TableCell align="right">{row.value}</TableCell>

  //         </TableRow>
  //       ))}
  //     </TableBody>
  //   </Table>
  // </TableContainer>

}

export default MiniStatement;