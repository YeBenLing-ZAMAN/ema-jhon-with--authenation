import React from 'react';
import { Link } from 'react-router-dom';
import './LogIn.css';
import google from '../../images/google.png';

const LogIn = () => {
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <form>
                    <div className='input-group'>
                        <label htmlFor="email">Eamil</label>
                        <input type="eamil" name='email' id='' />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="" />
                    </div>
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
                <button className='google-login-container'><img src={google} alt="" /> <p> continue with google</p></button>
            </div>
        </div>
    );
};

export default LogIn;