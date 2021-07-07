import React, { Component } from 'react';
import Header from '../header';
import Footer from '../footer';
import About from '../about';

export default class AboutPage extends Component {

  render() {

    return (
      <div className="about">
          <Header />
          <About />
          <Footer />
      </div>
    );
  }
}