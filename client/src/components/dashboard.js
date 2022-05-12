import React from 'react';
import MyCard from './myCard';
import ConnectedMiniStatement from './ConnectedMiniStatement';

const Dashboard = () =>{
  return(
    <div style={{display:'flex', padding: '5px'}}>
      <MyCard title={"savings"} content={"$5000"} />
      <MyCard title={"income"} content={"$7000"}/>
      <MyCard type="wide" title={"Transaction History"} content={<ConnectedMiniStatement />}/>
    </div>
    //  style={{minWidth: "100vh"}}

  );
}
export default Dashboard;