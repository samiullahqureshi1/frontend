import React from "react";
import logo from "../../img/mark.jpg";
import { FaLock, FaPhone } from "react-icons/fa";
import "./Login.css"; // Importing the CSS file

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-header">
      <a href='/'><img src={logo} alt="Logo" className="logo" /></a> {/* Logo */}
      </div>
      <div className="shadow-box">
      <div class="existing-customers">
    <h2>Existing Customers</h2>
    <p>Sign Into Next</p>
    <form>
      <label>Email Address or Customer Number</label>
      <input type="text" class="input-field" placeholder="Email or Customer Number" />

      <label>Your Password</label>
      <div class="password-container">
        <input type="password" class="input-field" placeholder="Password" />
        
      </div>

      <a href="#" class="forgot-password">Forgotten Password</a>
      <button type="submit" class="sign-in-btn">Sign In</button>
    </form>
  </div>
  <div class="new-customers">
    <h2>New Customers</h2>
    <p>Register with Next today</p>
    <a href="/signup"><button class="register-btn">Register Now</button></a>
  </div>
 
      </div>
    </div>
  );
};

export default Login;
