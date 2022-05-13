import React from 'react';

// We use Route in order to define the different routes of our application
import { Route, Routes } from 'react-router-dom';

// We import all the components we need in our app
import Sidebar from './components/sidebar';

import Navbar from './components/navbar';
import RecordList from './components/RecordList';
import Edit from './components/edit';
import Create from './components/create';
import Dashboard from './components/dashboard';

const App = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className='App' style={{position: 'relative', top: '64px', left: '60px'}}>
        <Routes>
          <Route exact path='/' element={<Dashboard />} />
          <Route path='/edit/:id' element={<Edit />} />
          <Route path='/recordlist' element={<RecordList />} />
        </Routes>
      </div>
      </>
  );
};

export default App;
