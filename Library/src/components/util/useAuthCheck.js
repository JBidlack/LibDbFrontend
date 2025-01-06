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
    return data;
  }
  catch (error) {
    console.error('Failed to parse');
    return null;
  }
}

const useAuthCheck = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
  
      if(token){
        const data = parsejwt(token);
          if(data && (!data.exp || data.exp * 1000 > Date.now())){
            const userInfo = JSON.parse(data.sub);
            setUserData({
            id: userInfo.id,
            email: userInfo.email,
            name: userInfo.name,
            username: userInfo.username,
          })
          }
          else{
            navigate('/login');
          }
      }
      else{
        navigate('/login');
      }
    }, [navigate]);
  // }, [navigate]);

  // useEffect(() => {
  //   if(userData === null || userData === undefined || userData.name ==="") {
  //     navigate('/login');
  //   }
  // }, [userData, navigate]);
  

  return userData;
};

export default useAuthCheck;


