import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="container header__container">
        <h3>J.ALISSA</h3>
        <nav className="header__nav">
          <p><Link to="/">Home</Link></p>
          <p><Link to="/portfolio">Portfolio</Link></p>
          <p><Link to="/about">About</Link></p>
          <p><Link to="/blog">Blog</Link></p>
          <p><Link to="/contact">Contact</Link></p>
        </nav>
        <Link to="/" className="header__menu">
          <div className="header__hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;