import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../util/AuthProvider';

const UserDashboard = ({children}) => {
  const navigate = useNavigate();
  const { isAuthenticated, userData} = useAuth();
  
  if(!isAuthenticated){
    navigate("/login");
  }

  return (
    <div>{userData?.name}</div>
  )
}

export default UserDashboard