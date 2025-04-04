import React, { useState } from 'react';
import Logo from '../../olx-logo.png';
import './Login.css';
import {login, signup} from '../../firebase'

function Login() {

  const [signState, setSignState] = useState("Sign In")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user_auth = async () => {
    if(signState==="Sign In"){
      await login(email, password);
    }
  }


  return (
    <div className="loginParentDiv">
      <img src={Logo} alt="OLX Logo" width="200" height="200" />

      <form>
        {/* Email Input */}
        <label htmlFor="email">Email</label>
        <input value={email} onChange={(e) => {e.target.value}}
        className="input" 
        type="email" id="email" name="email" placeholder="Enter your email" required />

        {/* Password Input */}
        <label htmlFor="password">Password</label>
        <input value={password} onChange={(e) => {e.target.value}}
        className="input" type="password" id="password" name="password" placeholder="Enter your password" required />

        {/* Login Button */}
        <button type="submit">Login</button>
      </form>

      {/* Signup Link */}
      <a href="/signup">Signup</a>
    </div>
  );
}

export default Login;
