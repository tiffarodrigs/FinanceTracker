import React from 'react';
import {useState} from 'react';

// We use Route in order to define the different routes of our application
import { Route, Routes } from 'react-router-dom';

// We import all the components we need in our app
import Sidebar from './components/sidebar';

import Navbar from './components/navbar';
import Edit from './components/edit';
import ConnnectedDashborad from './components/ConnectedDashboard';
import ConnectedRecordList from './components/ConnectedRecordList';
import Login from './components/Login';
import ConnectedLogin from './components/ConnectedLogin';
import useToken from './components/useToken';




const App = () => {
  const { token, setToken } = useToken();

  //const[token,setToken] = useState()
  //const token = getToken();

  if(!token){
    return <ConnectedLogin setToken={setToken}/>
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
          <Route path='/edit/:id' element={<Edit />} />
          <Route path='/recordlist' element={<ConnectedRecordList />} />
        </Routes>
      </div>
      </>
  );
};

export default App;
