import React, { Component } from 'react';
import Header from '../header';
import Footer from '../footer';
import Portfolio from '../portfolio';

export default class PortfolioPage extends Component {

  render() {

    return (
      <div className="home">
          <Header />
          <Portfolio />
          <Footer />
      </div>
    );
  }
}