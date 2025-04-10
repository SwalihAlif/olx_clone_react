import React, { useState } from 'react';
import Logo from '../../olx-logo.png';
import './Login.css';
// import {login} from '../../firebase'
import { useAuth } from '../../contex/AuthContex';
import {useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';



function Login() {

  const {login, user} = useAuth();

  const navigate = useNavigate();

  const [signState, setSignState] = useState("Sign In")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user_auth = async (e) => {
    e.preventDefault();
    if(signState==="Sign In"){
      try{
        await login(email, password);
        navigate("/")
        toast.success("✅ Logged in successfully");
        console.log("User: ", user)

      } catch (err) {
        toast.error("❌ Login failed: " + err.message);
      }
    }
  };


  return (
    <div className="loginParentDiv">
      <img src={Logo} alt="OLX Logo" width="200" height="200" />

      <form onSubmit={user_auth}>
        {/* Email Input */}
        <label htmlFor="email">Email</label>
        <input 
        value={email} 
        onChange={(e) => setEmail(e.target.value)}
        className="input" 
        type="email" 
        id="email" 
        name="email" 
        placeholder="Enter your email" 
        required />

        {/* Password Input */}
        <label htmlFor="password">Password</label>
        <input 
        value={password} 
        onChange={(e) => setPassword(e.target.value)}
        className="input" 
        type="password" 
        id="password" 
        name="password" 
        placeholder="Enter your password" 
        required />

        {/* Login Button */}
        <button type="submit">Login</button>
      </form>

      {/* Signup Link */}
      <a href="/signup">Signup</a>
    </div>
  );
}

export default Login;
