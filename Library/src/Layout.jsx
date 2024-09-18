import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
        <Header/>
        <main className='bg-lightbrown m-0'>
            <Outlet/>
        </main>
    </>
  )
}

export default Layout
