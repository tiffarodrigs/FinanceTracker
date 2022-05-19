import React, { useCallback, useEffect, useState } from 'react';
import {Grid} from '@mui/material';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
// We use Route in order to define the different routes of our application
import { Route, Routes } from 'react-router-dom';

// We import all the components we need in our app
import Sidebar from './components/sidebar';

import MiniDrawer from './components/NavBar1';

// import Navbar from './components/navbar';
import ConnnectedDashborad from './components/ConnectedDashboard';
import ConnectedRecordList from './components/ConnectedRecordList';
import ConnectedLogin from './components/ConnectedLogin';
import ConnectedAccounts from './components/ConnectedAccounts';


export const themeOptions: ThemeOptions = {
  palette: {
    type: 'light',
    primary: {
      main: '#036d69',
    },
    secondary: {
      main: '#f50057',
    },
    typography: {
      fontFamily:'Eczar',
    },
  },
};

const theme = createTheme(themeOptions);

const App = () => {
  // const { token, setToken } = useToken();
  const getToken = useCallback(() => {
    return sessionStorage.getItem('token');
  },[sessionStorage]);
  const [token,setToken] = useState(getToken());


  useEffect(() => {
    setToken(sessionStorage.getItem('token'))
  },[sessionStorage])

  

  // const [token,setToken] = useState()
  //const token = getToken();

  console.log({token})

  if(!token){
    return <ConnectedLogin />
  }
  return (
    <ThemeProvider theme={theme}>
      {/* <Box sx={{ display: 'flex' }}>
      <Navbar />
      <Sidebar />

      </Box> */}
      <MiniDrawer />
      <div className='App' style={{position: 'relative', top: '64px', left: '60px'}}>
        <Grid>
        <Routes>
        {/* <Route path='/' element={<ConnectedLogin/>} /> */}

        {/* <Route exact path='/' element={<Login/>} /> */}
          <Route exact path='/' element={<ConnnectedDashborad />} />
          <Route path='/recordlist' element={<ConnectedRecordList />} />
          <Route path='/accounts' element={<ConnectedAccounts/>} />
        </Routes>
        </Grid>
      </div>
      </ThemeProvider>
  );
};

export default App;
