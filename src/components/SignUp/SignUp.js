import React from 'react';
import { Link } from 'react-router-dom';
import google from '../../images/google.png'
const SignUp = () => {
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
                Already have a account? <Link className='form-link' to='/login'>LogIn</Link>
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

export default SignUp;