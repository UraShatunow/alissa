import React from 'react';
import { Link } from 'react-router-dom';

import './intro.css';

const Header = () => {
  return (
    <div className="container intro__container">
      <div className="intro">
        <div className="intro__overlay">
          <div className="intro__inner">
              <h1>THE ART OF FOOD</h1>
              <h3>PHOTOGRAPHY</h3>
              <Link to="/">View More</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;