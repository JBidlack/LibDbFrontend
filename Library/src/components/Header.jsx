import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { SiTestinglibrary } from "react-icons/si"
import vlogo from '../assets/vlogo.svg'
import { useAuth } from './util/AuthContext';

const Header = () => {
    const { isAuthenticated, userData} = useAuth();


  return (
    <header className='m-0 border-b-2 border-darkbrown'>
        <nav className='flex justify-between items-center w-full pt-4 pb-4'>
            <div className='pl-4'>
                <img src={vlogo} alt='Logo' className='h-20 text-darkbrown'/>
                {/* <SiTestinglibrary size={48} color='rgb(92, 64, 51)'/> */}
            </div>
            <ul className='flex-1 flex justify-start items-center pl-6'>
                <li className='px-4 text-darkbrown text-lg'>
                    <Link to={"/"}>
                    Home
                    </Link>
                </li> 
                <li className='px-4 text-darkbrown text-lg'>
                    <Link to={"/dashboard"}>
                    Dashboard
                    </Link>
                </li>
                <li className='px-4 text-darkbrown text-lg'>
                    <Link to={"/"}>
                    My Books
                    </Link>
                </li> 
                
            </ul>
            <div className='pr-4'>
                <button className='bg-darkbrown text-stone-300 px-4 py-2 rounded-xl hover:bg-brown'>
                    {isAuthenticated ? 'Sign Out': <Link to="/login" >Sign In</Link> }
                </button>
            </div>
        </nav>
    </header>
  )
}

export default Header
