import React, { useState } from 'react';
import logo from '../../img/mark.jpg';
import { FaShoppingCart } from "react-icons/fa"; // Import checkout icon
import './SignUp.css';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='signup-container'>
      <div className='header'>
      <a href='/'><img src={logo} alt="Logo" className="logo" /></a> {/* Logo */}
        <div className='header-right'>
          <a href='#'>help</a>
          <span className='divider'>|</span>
          <FaShoppingCart className='checkout-icon' />
        </div>
      </div>
      <div className='signup-text'>
        <p>Quick and Secure Signup</p>
      </div>
      <form className='signup-form'>
        <div className='form-group'>
          <label>Title</label>
          <select>
            <option>Select Title</option>
            <option>Mr</option>
            <option>Mrs</option>
            <option>Miss</option>
            <option>Dr</option>
          </select>
        </div>
        <div className='form-group'>
          <label>First Name</label>
          <input type='text' placeholder='First Name' />
        </div>
        <div className='form-group'>
          <label>Last Name</label>
          <input type='text' placeholder='Last Name' />
        </div>
        <div className='form-group'>
          <label>Email</label>
          <input type='email' placeholder='Email' />
        </div>
        <div className='form-group'>
          <label>Password</label>
          <p>Password must be 6-12 characters and include letters and numbers.</p>
          <div className='password-container'>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder='Password'
            />
            {/* <button type='button' onClick={togglePasswordVisibility}>
              {showPassword ? 'Hide' : 'Show'}
            </button> */}
          </div>
        </div>
        <div className='form-group'>
          <label>Date Of Birth</label>
          <p>Date Of Birth format is DD MM YY and age must be at least 18 years old.</p>
          <input type='text' placeholder='DD MM YY' />
        </div>
        <div className='form-group'>
          <label>Contact Telephone</label>
          <p>If we need to contact you we will be using this number.</p>
          <input type='tel' placeholder='Contact Telephone' />
        </div>
        <button type="submit" class="sign-up-btn">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
