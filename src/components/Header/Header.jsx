import React, { useContext, useState, useEffect } from 'react';
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { useAuth } from '../../contex/AuthContex';

function Header() {
  const {user} = useAuth();

  const [displayUser, setDisplayUser] = useState(null);

  console.log("User in header:", user);

  useEffect(() => {
    setDisplayUser(user);
    console.log("Updated user in header:", user);
}) 


  return (
    <header className="headerParentDiv">
      <div className="headerChildDiv">
        {/* Logo Section */}
        <div className="brandName">
          <OlxLogo />
        </div>

        {/* Location Search */}
        <div className="placeSearch">
          <Search />
          <input type="text" placeholder="Search locations..." />
          <Arrow />
        </div>

        {/* Product Search */}
        <div className="productSearch">
          <div className="input">
            <input type="text" placeholder="Find cars, mobile phones, and more..." />
          </div>
          <div className="searchAction">
            <Search color="#ffffff" />
          </div>
        </div>

        {/* Language Selector */}
        <div className="language">
          <span>ENGLISH</span>
          <Arrow />
        </div>

        {/* Login Section */}
        <div className="loginPage">
        <span>Welcome, {user?.username || user?.email || "Login"}!</span>
          <hr />
        </div>

        {/* Sell Button */}
        <div className="sellMenu">
          <SellButton />
          <div className="sellMenuContent">
            <SellButtonPlus />
            <span>SELL</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
