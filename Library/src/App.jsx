import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Login from './components/body/Login';
import Index from './components/body/Index';
import Layout from './Layout';
import UserDashboard from './components/body/UserDashboard';
import { AuthProvider } from './components/util/AuthProvider';

function App() {
  return(
    <AuthProvider>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Index/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<UserDashboard/>}/>
      </Route>
    </Routes>
    </AuthProvider>
  );
}

export default App
