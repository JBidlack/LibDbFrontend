import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../util/AuthProvider';

const UserDashboard = ({children}) => {
 
  const navigate = useNavigate();
  const { isAuthenticated, userData} = useAuth();
  
  useEffect(() =>{
    if(!isAuthenticated){
      navigate("/login");
    }
    if(userData){
      
    }
  }, []
)
  return (
    <div>
      <h1>Welcome back {userData?.name}!</h1>
    </div>
  )
}

export default UserDashboard