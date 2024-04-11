import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import '../Style/login.css'

function Login() {
  const navigate=useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      setEmailError('This is a required field');
    } else if (!emailRegex.test(email.trim())) {
      setEmailError('Invalid email format'); 
    } else {
      setEmailError('');
    }

    
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if (!password.trim()) {
      setPasswordError('This is a required field');
    } else if (!passwordRegex.test(password.trim())) {
      setPasswordError('Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, and one number');
    } else {
      setPasswordError('');
    }

    
    if (emailRegex.test(email.trim()) && passwordRegex.test(password.trim())) {
      navigate('/manage')
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center">
      <form onSubmit={handleSubmit} className='border w-100'>
      <p>email="abc@gmail.com" and password="Abcd@987"</p>
      <div className="form-group">
        <label>Email address</label>
        <input
          type="email"
          className="form-control w-50"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <small className="text-danger">{emailError}</small>
      </div>

      <div className="form-group mt-2">
        <label>Password</label>
        <input
          type="password"
          className="form-control w-50"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <small className="text-danger">{passwordError}</small>
      </div>
      <div className="text mt-5">
        <a href='/'><h2>Forgot Password</h2></a>
      </div>

      <button type="submit" className="btn btn-primary mt-3 w-50">Login in</button>
    </form>
    </div>
  );
}

export default Login