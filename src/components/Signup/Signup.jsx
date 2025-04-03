import React from 'react';
import Logo from '../../olx-logo.png'; // Ensure this path is correct
import './Signup.css';

export default function Signup() {
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo} alt="OLX Logo" />
        <form>
          <label htmlFor="username">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="username"
            name="name"
            defaultValue=""
            placeholder="Enter your username"
          />
          <br />

          <label htmlFor="email">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="email"
            name="email"
            defaultValue=""
            placeholder="Enter your email"
          />
          <br />

          <label htmlFor="phone">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="phone"
            name="phone"
            defaultValue=""
            placeholder="Enter your phone number"
          />
          <br />

          <label htmlFor="password">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="password"
            name="password"
            defaultValue=""
            placeholder="Enter your password"
          />
          <br />
          <br />
          
          <button type="submit">Signup</button>
        </form>
        
        <a href="#">Login</a>
      </div>
    </div>
  );
}