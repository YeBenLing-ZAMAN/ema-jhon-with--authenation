import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LogIn.css';
import google from '../../images/google.png';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const LogIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    /* use hooks for use loging email and password from github */
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    /* log in hooks with google */
    const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
    const navigate = useNavigate();


    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    const handleUserLogIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    if (user || userGoogle) {
        navigate('/');
    }


    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <form onSubmit={handleUserLogIn}>
                    <div className='input-group'>
                        <label htmlFor="email">Eamil</label>
                        <input onBlur={handleEmailBlur} type="eamil" name='email' id='' />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" />
                    </div>
                    <p style={{ color: "red" }}>{error?.message}</p>
                    {
                        loading && <p>Loading....</p>
                    }
                    <input className='form-submit' type="submit" value="login" />
                </form>
                <p>
                    New to ema-jhon? <Link className='form-link' to='/signup'>Create an account</Link>
                </p>
                <div className='line-container'>
                    <div className='line'></div>
                    <p>OR</p>
                    <div className='line'></div>
                </div>
                <button onClick={() => signInWithGoogle()} className='google-login-container'><img src={google} alt="" /> <p> continue with google</p></button>
            </div>
        </div>
    );
};

export default LogIn;