import React from 'react';
import MyCard from './myCard';
import MiniStatement from './miniStatement';

const Dashboard = (props) =>{
  return(
    <div style={{display:'flex', padding: '5px'}}>
    <MyCard title={"savings"} content={"$5000"} />
    <MyCard title={"income"} content={"$7000"}/>
    <MyCard title={"Transaction History"} content={<MiniStatement/>}/>
    </div>

  );
}
export default Dashboard;