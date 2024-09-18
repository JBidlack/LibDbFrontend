import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const[errorMsg, setErrorMsg] = useState('');
    const navigate = useNavigate();
  
    const authenticate = async (e) => {
      e.preventDefault();
  
      const member = {
        username,
        password,
      };
  
      try{
        const res = await fetch('http://localhost:8080//api/auth/login', {
          method: 'POST',
          headers:{
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(member),
        });
  
        if (res.ok){
          const result = await res.json();
          const{ sessionCode } = result;
  
          navigate(`/dashboard?sessionCode=${sessionCode}`);
        }
        else{
          const error = await res.json();
          setErrorMsg(error.message || 'Login Failed');
        }
      } 
      catch(error){
        setErrorMsg('A system error occured. Please notify an admin');
      }
    };
  
  
    return (
      <div className='bg-lightbrown m-0 flex justify-center h-screen items-center'>
        <form typeof='login' className='flex flex-col bg-darkbrown min-w-40 w-auto h-auto p-20 pt-10 px-24 shadow-lg shadow-zinc-500 rounded-lg'
              onSubmit={authenticate}>
            <div className='flex justify-center pt-0'>
                <span className='text-4xl font-extrabold text-stone-400'>Sign In</span>
            </div>
            <div className='py-6 flex flex-col'>
                <label htmlFor="username" className='pr-2 text-stone-300 font-semibold font-sans text-lg'>Username: </label>
                <input className="username rounded-md p-1" 
                        type="text" 
                        id='username'
                        value={username}
                        onChange={(e)=> setUsername(e.target.value)}
                        required/>
            </div>
            <div className='pb-6 flex flex-col'>
                <label htmlFor="password" className='pr-2 text-stone-300 font-semibold font-sans text-lg'>Password: </label>
                <input className="password rounded-md p-1" 
                    type="password"
                    id='password'
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                    required />
            </div>
            {errorMsg && <p className='error text-red-500 font-extrabold text-xl'>{errorMsg}</p>}
            
            <button className='bg-lightbrown rounded-md text-stone-300 font-semibold font-sans text-lg'>Submit</button>
            <span className='flex justify-center text-blue-500 hover:underline hover:text-blue-300 pt-4'><a href='./signup'>Not a member yet?</a></span>
            <span className='flex justify-center text-blue-500 hover:underline hover:text-blue-300'><a href='./signup'>Sign up here!</a></span>
        </form>
      </div>
    )
}

export default Login
