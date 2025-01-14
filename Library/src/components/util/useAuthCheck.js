import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

let user = {
  id: '',
  name: '',
  username: '',
  email: '',
}

export const parsejwt =(token) => {
  try{
    if (token !== null){
      const base64Pay = token.split('.')[1];
      
      const decoded = atob(base64Pay.replace(/-/g, '+').replace(/_/g, '/'));
      const data = JSON.parse(decoded)
      return data;
    } 
    return null;
  }
  catch (error) {
    console.error('Failed to parse');
    return null;
  }
}

export const checkExp = (token) => {
  try{
    if (token !== null){
      const base64Pay = token.split('.')[1];
      
      const decoded = atob(base64Pay.replace(/-/g, '+').replace(/_/g, '/'));
      const data = JSON.parse(decoded);
      if(data.exp < Date.now()){
        return true;
      }
    } 
    return false;
  }
  catch (error) {
    console.error('Failed to parse');
    return null;
  }
}

export const updateExp = (token) => {
  try{
    if (token !== null){
      const base64Pay = token.split('.')[1];
      
      const decoded = atob(base64Pay.replace(/-/g, '+').replace(/_/g, '/'));
      const data = JSON.parse(decoded);
      if(data.exp < Date.now()){
        setTimeout(() => {
          fetch('http://localhost:8080/api/members/token', {
            method: 'POST',
            headers: {
              'Content-Type': 'aplication/json',
            },
            body: JSON.stringify({token: localStorage.getItem('token')}),
          })
          .then((res) => {
            if(!res.ok) {
              throw new Error("An error has occured. Please contact and administrator");
            }
            return res.text();
          })
          .then((newToken) => {
            localStorage.setItem('token', newToken);
          })

        }, data.exp-5*60*1000);
      }
      else{
        navigate('/login');
      }
    }
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
  

  return userData;
};

export default useAuthCheck;


