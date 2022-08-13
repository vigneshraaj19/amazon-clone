import React, { useState } from 'react';
import './Login.css';
import { useNavigate} from "react-router-dom";
import { auth } from "./firebase";
import {signInWithEmailAndPassword,createUserWithEmailAndPassword} from 'firebase/auth'
import { toast } from 'react-toastify';
export default function Logins() 
{
  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = e => {
    e.preventDefault();
    
     signInWithEmailAndPassword(auth,email, password)
    .then(() => {
          history("/");
          toast.success("Login successful");
     }) 
     .catch(err => toast.error("Enter valid Email and Password"))
  }

  const register = e => {
    e.preventDefault();
    
     createUserWithEmailAndPassword(auth,email, password)
     .then((auth) => {
        
         if (auth) {
            toast.success("Account created successfully");
         }
     })
     .catch(error => toast.error("Enter given Email-id already exist"))
  }
 
  return (
    <div className='login'>
           
                <img
                    className="login__logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
                />
           

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)}  />

                    <h5>Password</h5>
                    <input type='password'  value={password} onChange={e => setPassword(e.target.value)}  />

                    <button type='submit'  onClick={signIn} className='login__signInButton'>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>
            </div>
        </div>
  )
  }

