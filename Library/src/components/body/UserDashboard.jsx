import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import useAuthCheck from '../util/useAuthCheck';


const UserDashboard = ({children}) => {
 
  const navigate = useNavigate();
  const userData = useAuthCheck();

  const userName = userData.name ? userData.name.replace(/^"|"$/g, ''): '';
  const userEmail = userData.email ? userData.email.replace(/^"|"$/g, ''): '';

  const res = () => {
    
  }

  useEffect(() => {
    if(!userData) {
      navigate('/login');
    }
  }, [userData, navigate]);
  


  return (
    <div>
      <div className="m-10">
        <h1 className='text-xxl font-special text-darkbrown'>Welcome back {userName}!</h1>
      </div>
      <div >
        <div className="ml-20 mr-16">
          <h2 className="text-xl font-special text-darkbrown">Your Recent Additions:</h2>
        </div>
        <div className="ml-10">
          
        </div>
      </div>
    </div>
  )
}

export default UserDashboard