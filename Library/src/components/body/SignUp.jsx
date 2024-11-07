import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { encryptData } from '../util/Encrypt';


const SignUp = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVerify, setPasswordVerify] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const[errorMsg, setErrorMsg] = useState('');
    const navigate = useNavigate();
    // const encryptData = encryptData();
  
    const formSubmit = async (e) => {
        e.preventDefault();

        

        if(password !== passwordVerify){
            setErrorMsg('Your password verification has failed.\n Please try again.')
        }
        else{

            const encPassword = encryptData(password);
            const encEmail = encryptData(email);
            const encName = encryptData(name);

            const member = {
                username,
                password: encPassword,
                email: encEmail, 
                name: encName,
            };
        
            try{
                const res = await fetch('http://localhost:8080/api/members/add', {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(member),
                  credentials: 'include',
                });

                if (res.ok){
                    navigate(`/login`);
                }
                else{
                    const error = await res.json();
                    setErrorMsg(error?.message || 'Login Failed');
                }
            } 
            catch(error){
                setErrorMsg('A system error occured. Please notify an admin' + error.message);
            }
        }
    };
  
  
    return (
      <div className='bg-lightbrown m-0 flex justify-center h-screen items-center'>
        <form typeof='login' className='flex flex-col bg-darkbrown min-w-60 w-1/2 h-auto p-20 pt-10 px-24 shadow-lg shadow-zinc-500 rounded-lg'
              onSubmit={formSubmit}>
            <div className='flex justify-center pt-0'>
                <span className='text-4xl font-extrabold text-stone-400'>Sign Up</span>
            </div>
            <div className='pt-6 pb-4 flex flex-col'>
                <label htmlFor="username" className='pr-2 text-stone-300 font-semibold font-sans text-lg'>Username: </label>
                <input className="username rounded-md p-1" 
                        type="text" 
                        id='username'
                        value={username}
                        onChange={(e)=> setUsername(e.target.value)}
                        required/>
            </div>
            <div className='pb-4 flex flex-col'>
                <label htmlFor="password" className='pr-2 text-stone-300 font-semibold font-sans text-lg'>Password: </label>
                <input className="password rounded-md p-1" 
                    type="password"
                    id='password'
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                    required />
            </div>
            <div className='pb-4 flex flex-col'>
                <label htmlFor="passwordVerify" className='pr-2 text-stone-300 font-semibold font-sans text-lg'>Verify Password: </label>
                <input className="passwordVerify rounded-md p-1" 
                    type="password"
                    id='passwordVerify'
                    value={passwordVerify}
                    onChange={(e)=> setPasswordVerify(e.target.value)}
                    required />
            </div>
            <div className='pb-4 flex flex-col'>
                <label htmlFor="name" className='pr-2 text-stone-300 font-semibold font-sans text-lg'>Name: </label>
                <input className="name rounded-md p-1" 
                        type="text" 
                        id='name'
                        value={name}
                        onChange={(e)=> setName(e.target.value)}
                        required/>
            </div>
            <div className='pb-8 flex flex-col'>
                <label htmlFor="email" className='pr-2 text-stone-300 font-semibold font-sans text-lg'>Email: </label>
                <input className="email rounded-md p-1" 
                        type="email" 
                        id='email'
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                        required/>
            </div>
            {errorMsg && <p className='error text-red-500 font-extrabold text-xl'>{errorMsg}</p>}
            <div className='flex justify-center'>
                <button type='submit' className='bg-lightbrown rounded-md text-stone-200 font-semibold font-sans text-lg w-3/4'>Create Account</button>
            </div>
            <span className='flex justify-center text-blue-500 hover:underline hover:text-blue-300 pt-4'><a href='./login'>Already a member yet?</a></span>
            <span className='flex justify-center text-blue-500 hover:underline hover:text-blue-300'><a href='./login'>Login here!</a></span>
        </form>
      </div>
  )
}

export default SignUp
