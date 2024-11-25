import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { SiTestinglibrary } from "react-icons/si"
import vlogo from '../assets/vlogo.svg'
import useAuthCheck from './util/useAuthCheck';

const Header = () => {
    const navigate = useNavigate();
    const userData = sessionStorage.getItem('user');
    const isAuthenticated = !!userData;

    const logout = () => {
        document.cookie = "authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "JSESSION=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        sessionStorage.removeItem('user');
        sessionStorage.removeItem('token');
        navigate('/');
    }

  return (
    <header className='m-0 border-b-2 border-darkbrown'>
        <nav className='flex justify-between items-center w-full pt-4 pb-4'>
            <div className='pl-4'>
                <img src={vlogo} alt='Logo' className='h-20 text-darkbrown'/>
                {/* <SiTestinglibrary size={48} color='rgb(92, 64, 51)'/> */}
            </div>
            <ul className='flex-1 flex justify-start items-center pl-6'>
                <li className='px-4 text-darkbrown text-lg font-special'>
                    <Link to={"/"}>
                    Home
                    </Link>
                </li> 
                <li className='px-4 text-darkbrown text-lg font-special'>
                    <Link to={"/dashboard"}>
                    Dashboard
                    </Link>
                </li>
                <li className='px-4 text-darkbrown text-lg font-special'>
                    <Link to={"/"}>
                    My Books
                    </Link>
                </li> 
                
            </ul>
            <div className='pr-4'>
                
                    {isAuthenticated ? 
                    (<button className='bg-darkbrown text-stone-300 px-4 py-2 rounded-xl hover:bg-brown font-special' 
                    onClick={logout}>Sign Out</button>): 
                    (<Link to="/login" className='bg-darkbrown text-stone-300 px-4 py-2 rounded-xl hover:bg-brown font-special'>Sign In</Link>) }

            </div>
        </nav>
    </header>
  )
}

export default Header
