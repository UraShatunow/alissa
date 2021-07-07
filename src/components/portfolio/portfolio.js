import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './portfolio.css';

export default class Portfolio extends Component {

  render() {

    return (
      <div className="portfolio">
          <h2>PORTFOLIO</h2>
          <div className="container portfolio__container">
              <div className="portfolio__item portfolio__item-1">
                <div className="portfolio__overlay">
                  <h2 className="portfolio__heading">EDITORIAL</h2>
                  <Link to="/portfolio">View</Link>
                </div>
              </div>
              <div className="portfolio__item portfolio__item-2">
                <div className="portfolio__overlay">
                  <h2 className="portfolio__heading">FOOD & SERVE</h2>
                  <Link to="/portfolio">View</Link>
                </div>
              </div>
              <div className="portfolio__item portfolio__item-3">
                <div className="portfolio__overlay">
                  <h2 className="portfolio__heading">BAKED GOODS</h2>
                  <Link to="/portfolio">View</Link>
                </div>
              </div>
          </div>
      </div>

    );
  }
}
