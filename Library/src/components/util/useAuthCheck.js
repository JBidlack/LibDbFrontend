import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const parsejwt =(token) => {
  try{
    const base64Pay = token.split('.')[1];
    const base64 = base64Pay.replace(/-/g, '+').replace(/_/g, '/');
    const decoded = base64.parse(atob(base64));
    return decoded;
  }
  catch (error) {
    console.error('Failed to parse');
    return null;
  }
}

const useAuthCheck = () => {
  const [userData, setUserData] = useState('');
  const navigate = useNavigate();

  const token = sessionStorage.getItem('user');
  useEffect(() => {
    if(token){
      const data = parsejwt(token);
        if(data && (!data.exp || data.exp * 1000 > Date.now())){
          setUserData(data);
        }
        else{
          navigate('/login');
        }

    }
    else{
      navigate('/login');
    }
  }, [navigate]);
  return userData;
};

export default useAuthCheck;


