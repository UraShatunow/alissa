import React, { Component } from 'react';
import Header from '../header';
import Footer from '../footer';
import Contact from '../contact';

export default class ContactPage extends Component {

  render() {

    return (
      <div className="contact">
          <Header />
          <Contact />
          <Footer />
      </div>
    );
  }
}