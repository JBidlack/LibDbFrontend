import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

const UserDashboard = () => {
  const [userInfo, setUserInfo] = useState('');
  const navigate = useNavigate();
  const[errorMsg, setErrorMsg] = useState('');
  
  const verify = async() =>{

    const sessionCode = localStorage.getItem('sessionCode');


    if(!sessionCode){
        alert("Not signed in");
        useNavigate("/login");
    }
    else{
      try{  const res = await fetch('http://localhost:8080/api/member/profile', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'X-Auth-Token': sessionCode
            },
            
          }
        );
        if(res.ok){
          const result = await res.json();
          setUserInfo(result);
        }
      }
      catch(error){
        setErrorMsg(error?.message || "An error has occured")
      }
    }
  }

  useEffect(() => {
    verify();
  }, []);

  return (
    <div>{userInfo.name}</div>
  )
}

export default UserDashboard