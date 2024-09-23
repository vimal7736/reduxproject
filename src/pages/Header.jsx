import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div  className="logo">
        <Link to="/">Aishus Movie App</Link>
      </div>
      <nav className="nav">
        <ul className="nav-links">
          
        </ul>
      </nav>
    </header>
  );
};

export default Header;
