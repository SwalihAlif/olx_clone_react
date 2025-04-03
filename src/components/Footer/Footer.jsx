import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footerParentDiv">
      <div className="content">
        <FooterSection title="POPULAR LOCATIONS" items={["Kolkata", "Mumbai", "Chennai", "Pune"]} />
        <FooterSection title="ABOUT US" items={["About OLX Group", "Careers", "Contact Us", "OLXPeople"]} />
        <FooterSection title="OLX" items={["Help", "Sitemap", "Legal & Privacy information"]} />
      </div>
      <div className="footer">
        <p>Other Countries: Pakistan - South Africa - Indonesia</p>
        <p>Free Classifieds in India. © 2006-2025 OLX</p>
      </div>
    </footer>
  );
}

// Reusable Footer Section Component
const FooterSection = ({ title, items }) => (
  <div>
    <div className="heading">
      <p>{title}</p>
    </div>
    <div className="list">
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  </div>
);

export default Footer;
