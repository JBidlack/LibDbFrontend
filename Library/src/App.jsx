import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <form typeof='login' className='flex'>
        
        <div className='flex'>
          <label htmlFor="username" className='flexpr-2'>Username: </label>
          <input className="username" type="text" />
        </div>
        <div className=''>
          <label htmlFor="password">Password: </label>
          <input className="password" type="password" />
        </div>
        
      </form>
    </>
  )
}

export default App
