import React from 'react';
import './View.css';

function View() {
  return (
    <div className="viewParentDiv">
      {/* Image Section */}
      <div className="imageShowDiv">
        <img src="../../../Images/R15V3.jpg" alt="YAMAHA R15V3" />
      </div>

      {/* Product Details Section */}
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; 250000</p>
          <span>YAMAHA R15V3</span>
          <p>Two Wheeler</p>
          <span>Tue May 04 2021</span>
        </div>

        {/* Seller Contact Section */}
        <div className="contactDetails">
          <p>Seller details</p>
          <p>No name</p>
          <p>1234567890</p>
        </div>
      </div>
    </div>
  );
}

export default View;
