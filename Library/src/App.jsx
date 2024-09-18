import React, { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Layout from './Layout';

function App() {
  return(
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Login/>}/>
        <Route path='/login' element={<Login/>}/>
      </Route>
    </Routes>
  );
}

export default App
