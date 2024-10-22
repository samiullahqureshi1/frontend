import React from 'react';
import logo from '../../img/mark.jpg';
import { FaLock ,FaPhone} from 'react-icons/fa';

const Login = () => {
  return (
    <div className="">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="logo" />
        <FaLock className="text-gray-500 text-2xl" />
        <div className="flex items-end text-gray-500 text-xl">
          <FaPhone className="text-2xl " />
          <span>123-456-7890 | Help</span> {/* Replace with your number */}
        </div>
      </div>
    </div>
  );
};

export default Login;
