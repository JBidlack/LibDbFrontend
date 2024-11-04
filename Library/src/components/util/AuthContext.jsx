import React, { createContext, useEffect, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();

    const login = (data) => {
      setIsAuthenticated(true);
      setUserData(data);
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userData', JSON.stringify(data));
    };

    const logout = () => {
      setIsAuthenticated(false);
      setUserData(null);
      localStorage.removeItem('isAuthenticated');
      localStorage.removeItem('userData');      
      navigate('/login');
    };

    useEffect(() => {
      if (location.pathname === '/signup') return;
      if (location.pathname === '/signup') return;

      const checkSession = async () => {
        try{
          const response = await fetch('/api/auth/check-session', {
            credentials: 'include,'
          });
          if(response.ok) {
            const data = await response.json();
            setIsAuthenticated(true);
            setUserData(data);
            localStorage.setItem('isAuthenticated', 'true');
            localStorage.setItem('userData', JSON.stringify(data));
          }
          else{
            setIsAuthenticated(false);
            setUserData(null);
            localStorage.removeItem('isAuthenticated');
            localStorage.removeItem('userData');
            navigate('/login');
          }
        }
        catch(error){
          console.error(error);
          setIsAuthenticated(false);
          setUserData(null);
          localStorage.removeItem('isAuthenticated');
          localStorage.removeItem('userData');
          navigate('/login');
        }
      };
      checkSession();
    }, []);

  return (
    <AuthContext.Provider value={{isAuthenticated, userData, login, logout}}>
        {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);