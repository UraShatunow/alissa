import React, { Component } from 'react';
import Header from '../header';
import Footer from '../footer';
import Blog from '../blog';

export default class BlogPage extends Component {

  render() {

    return (
      <div className="blog">
          <Header />
          <Blog />
          <Footer />
      </div>
    );
  }
}