import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

let user = {
  id: '',
  name: '',
  username: '',
  email: '',
}
const parsejwt =(token) => {
  try{
    const base64Pay = token.split('.')[1];
    
    const decoded = atob(base64Pay.replace(/-/g, '+').replace(/_/g, '/'));
    const data = JSON.parse(decoded)
    return JSON.parse(decoded);
  }
  catch (error) {
    console.error('Failed to parse');
    return null;
  }
}

const useAuthCheck = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  const token = localStorage.getItem('token');
  // useEffect(() => {
    if(token){
      const data = parsejwt(token);
        if(data && (!data.exp || data.exp * 1000 > Date.now())){
          const userInfo = JSON.parse(data.sub);
          user.id = userInfo.id;
          user.email = userInfo.email;
          user.name = userInfo.name;
          user.username = userInfo.username
          setUserData(user);
        }
        else{
          navigate('/login');
        }
    }
    else{
      navigate('/login');
    }
  // }, [navigate]);

  // useEffect(() => {
  //   if (userData) {
  //     console.log("User data has been updated:", userData);
  //   }
  // }, [userData]);
  

  return user;
};

export default useAuthCheck;


