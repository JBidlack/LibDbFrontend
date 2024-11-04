import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Login from './components/body/Login';
import SignUp from './components/body/SignUp';
import Index from './components/body/Index';
import Layout from './Layout';
import UserDashboard from './components/body/UserDashboard';
import { useAuth, AuthProvider } from './components/util/AuthContext';

const SecureLink= ({element}) =>{
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? element : <Navigate to="/login"/>; 
}

const App = () => {
  
  return(
    
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Index/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/dashboard' element={<SecureLink element={<UserDashboard/>}/>}/>
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App
