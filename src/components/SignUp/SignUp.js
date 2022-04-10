import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import google from '../../images/google.png'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';



const SignUp = () => {

    /* make store for all */
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const naviagte = useNavigate();
    /* firebasd hooks state used */
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)

    /* event gulake set koro tumar state gula te */
    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    const handlConfirmPassword = event => {
        setConfirmPassword(event.target.value);
    }

    if (user) {
        naviagte('/home');
    }

    /* page reload dekanor style */
    const handleCrreateUser = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('Your two password did not match');
            return;
        }
        if (password.length < 6) {
            setError('password must be 6 charactore of longer');
            return;
        }

        createUserWithEmailAndPassword(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
    }


    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>SignUp</h2>
                <form onSubmit={handleCrreateUser}>
                    <div className='input-group'>
                        <label htmlFor="email">Eamil</label>
                        <input onBlur={handleEmailBlur} type="eamil" name='email' id='email' required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="password" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="confirmPassword">ConfirmPassword</label>
                        <input onBlur={handlConfirmPassword} type="Password" name="confirmPassword" id="comirmPassword" required />
                    </div>
                    <p style={{ color: "red" }}>{error}</p>
                    <input className='form-submit' type="submit" value="Sign Up" />
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