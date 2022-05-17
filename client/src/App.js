import React, { useCallback, useEffect, useState } from 'react';

// We use Route in order to define the different routes of our application
import { Route, Routes } from 'react-router-dom';

// We import all the components we need in our app
import Sidebar from './components/sidebar';

import Navbar from './components/navbar';
import ConnnectedDashborad from './components/ConnectedDashboard';
import ConnectedRecordList from './components/ConnectedRecordList';
import ConnectedLogin from './components/ConnectedLogin';
import ConnectedAccounts from './components/ConnectedAccounts';




const App = () => {
  // const { token, setToken } = useToken();
  const getToken = useCallback(() => {
    const tokenString = sessionStorage.getItem('token');
  },[sessionStorage])
  const [token,setToken] = useState(getToken());
  useEffect(() => {
    setToken(sessionStorage.getItem('token'))
  })

  

  // const [token,setToken] = useState()
  //const token = getToken();

  if(!token){
    return <ConnectedLogin />
  }
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className='App' style={{position: 'relative', top: '64px', left: '60px'}}>
        <Routes>
        {/* <Route path='/' element={<ConnectedLogin/>} /> */}

        {/* <Route exact path='/' element={<Login/>} /> */}
          <Route exact path='/' element={<ConnnectedDashborad />} />
          <Route path='/recordlist' element={<ConnectedRecordList />} />
          <Route path='/accounts' element={<ConnectedAccounts/>} />
        </Routes>
      </div>
      </>
  );
};

export default App;
