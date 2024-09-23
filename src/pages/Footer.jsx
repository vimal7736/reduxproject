import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h1>Aishus Movie App</h1>
        </div>
        <div className="footer-links">
         
        </div>
        <div className="footer-contact">
          <p>Email: <a href="mailto:info@example.com">vimalonboard69@example.com</a></p>
          <p>Phone: <a href="tel:+1234567890">+91-7736173889</a></p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Aishus Movie App. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
