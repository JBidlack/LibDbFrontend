import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/body/Login';
import SignUp from './components/body/SignUp';
import Index from './components/body/Index';
import UserDashboard from './components/body/UserDashboard';
import Layout from './Layout';



const App = () => {
  
  return(
    
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Index />} />
          <Route path='signup' element={<SignUp />} />
          <Route path='login' element={<Login />} />
          <Route path='dashboard' element={<UserDashboard />} />
        </Route>
      </Routes>
  );
}

export default App
