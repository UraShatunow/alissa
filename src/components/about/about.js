import React, { Component } from 'react';
import './about.css';

export default class About extends Component {

  render() {
    return (
      <div className="about">
          <div className="container about__container">
            <div className="about__inner">
              <div className="about__image"></div>
              <div className="about__text">
                <h2>ABOUT JADE</h2>
                <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. </p>
                <p>This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company.</p>
                <h3>Education:</h3>
                <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
                <h3>Awards & Nominations:</h3>
                <p>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
              </div>
            </div>
          </div>
      </div>
    );
  }

}
