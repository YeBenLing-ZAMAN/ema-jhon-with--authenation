import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './Shipment.css'
const Shipment = () => {
    const [user] = useAuthState(auth);

    /* store element */
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    /* store element */
    const handleNameBlur = event => {
        setName(event.target.value);
    }
    const handleAdressBlur = event => {
        setAddress(event.target.value);
    }
    const handlMobileBlur = event => {
        setPhone(event.target.value);
    }
    const handleCrreateUser = event => {
        event.preventDefault();
        const shipping ={name , email, address, phone};
        console.log(shipping);
    }

    return (
        <div className='form-container'>
            <div className='shipping-form-container'>
                <h2 className='form-title'>Shipping Form </h2>
                <form onSubmit={handleCrreateUser}>
                    <div className='input-group'>
                        <label htmlFor="name">Name</label>
                        <input onBlur={handleNameBlur} type="name" name='name' id='name' required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="email">Eamil</label>
                        <input value={user?.email} readOnly type="eamil" name='email' id='email' required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="address">Address</label>
                        <input onBlur={handleAdressBlur} type="text" name="address" id="address" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="phoneNumber">Moible Number</label>
                        <input onBlur={handlMobileBlur} type="tel" name="phone" id="comirmPassword" required />
                    </div>
                    <input className='form-submit' type="submit" value="Add Shipping" />
                </form>
            </div>
        </div>
    );
};

export default Shipment;