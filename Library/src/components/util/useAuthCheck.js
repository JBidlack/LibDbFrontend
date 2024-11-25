import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const getCookie = (name) => {
  const value = `;${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop().split(';').shift();
  }
  return null;
}

const useAuthCheck = () => {
  const [userData, setUserData] = useState('');
  const navigate = useNavigate();

  const token = sessionStorage.getItem('user');
  useEffect(() => {
    if(token){
      const data = JSON.parse(token);
        if(data){
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


