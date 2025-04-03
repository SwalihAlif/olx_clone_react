import React from 'react';
import Logo from '../../olx-logo.png';
import './Login.css';

function Login() {
  return (
    <div className="loginParentDiv">
      <img src={Logo} alt="OLX Logo" width="200" height="200" />

      <form>
        {/* Email Input */}
        <label htmlFor="email">Email</label>
        <input className="input" type="email" id="email" name="email" placeholder="Enter your email" required />

        {/* Password Input */}
        <label htmlFor="password">Password</label>
        <input className="input" type="password" id="password" name="password" placeholder="Enter your password" required />

        {/* Login Button */}
        <button type="submit">Login</button>
      </form>

      {/* Signup Link */}
      <a href="/signup">Signup</a>
    </div>
  );
}

export default Login;
