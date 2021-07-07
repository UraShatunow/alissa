import React from 'react';
import { Link } from 'react-router-dom';

import './footer.css';
import pinterest from './img/p.webp';
import facebook from './img/f.webp';
import twitter from './img/t.webp';
import instagram from './img/i.webp';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__socials">
        <Link to="/pinterest" target="_blank">
          <img src={pinterest} alt="pinterest icon"/>
        </Link>
        <Link to="/facebook" target="_blank">
          <img src={facebook} alt="facebook icon"/>
        </Link>
        <Link to="/twitter" target="_blank">
          <img src={twitter} alt="twitter icon"/>
        </Link>
        <Link to="/instagram" target="_blank">
          <img src={instagram} alt="instagram icon"/>
        </Link>
      </div>
      <p>© 2023 by The Art of Food. Proudly created by Ivashkin Kirill</p>
    </div>
  );
};

export default Footer;