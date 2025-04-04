import React, { useState } from 'react';
import Logo from '../../olx-logo.png'; // Ensure this path is correct
import './Signup.css';
// import {signUp} from '../../firebase'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contex/AuthContex';

export default function Signup() {

  const { signUp } = useAuth();

  const [signupState, setSignupState] = useState("Sign Up")

  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')

  const user_auth = async (event) => {
    event.preventDefault();
    if (signupState==="Sign Up") {
      try {
        await signUp(email, password, username, phone);
        alert("Signed up successfully")
        navigate('/');

      } catch (error) {
        console.error("Signup error: ", error);
        alert("Signup failed");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username)
  }



  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo} alt="OLX Logo" />
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            id="username"
            name="name"
            placeholder="Enter your username"
          />
          <br />

          <label htmlFor="email">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            name="email"
            placeholder="Enter your email"
          />
          <br />

          <label htmlFor="phone">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
          />
          <br />

          <label htmlFor="password">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            name="password"
            placeholder="Enter your password"
          />
          <br />
          <br />
          
          <button type="submit" onClick={user_auth}>{signupState}</button>
        </form>
        
        <a href="/login">Login</a>
      </div>
    </div>
  );
}