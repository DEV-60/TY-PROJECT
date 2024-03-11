import React, { useState } from 'react';
import './SignUpLogin.css';
import { Link } from 'react-router-dom';



import user_icon from '../Assests/person.png';
import email_icon from '../Assests/email.png';
import password_icon from '../Assests/password.png';
import videoSource from '../Assests/pexels-mikhail-nilov-6507731 (1080p).mp4';

const SignUpLogin = () => {
  const [action, setAction] = useState("Sign Up");

  const handleForgotPassword = () => {
    console.log("Forgot Password clicked!");
    // Add your logic for handling the forgot password action here
  };

  return (
    <>
      <div className="video-background">
        <video autoPlay muted loop>
          <source src={videoSource} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className='container'>
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>
        <div className='inputs'>
          {action === "Login" ? null :
            <div className='input'>
              <img src={user_icon} alt=""/>
              <input type='text' placeholder="Username"/>
            </div>
          }
          <div className='input'>
            <img src={email_icon} alt=""/>
            <input type='email' placeholder="Email"/>
          </div>
          <div className='input'>
            <img src={password_icon} alt=""/>
            <input type='password' placeholder="Password"/>
          </div>
        </div>
        {action === "Sign Up" ? null :
          <div className="Forget-password" onClick={handleForgotPassword}>Forgot Password</div>
        }
        <div className="submit-container">
        <div>
          <div className={action === "Login" ? "submit gray" : "submit"} onClick={() =>   {setAction("Sign Up")}}><link to='/Translate'>Sign Up</link></div>
          <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => {setAction("Login")}}>Login</div>
</div>

          
        </div>
      </div>
    </>
  );
}

export default SignUpLogin;
