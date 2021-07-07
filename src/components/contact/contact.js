import React, { Component } from 'react';
import './contact.css';


export default class Contact extends Component {

  render() {
    return (
      <div className="contact">
          <div className="container contact__container">
            <div className="contact__inner">
              <div className="contact__image"></div>
              <div className="contact__text">
                <h2>GET IN TOUCH</h2>
                <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. </p>
                <p>Tel: 123-456-7890  |  Email: info@mysite.com</p>
                <form className="form" name="register" action="http://httpbin.org/post" method="POST">
                  <fieldset className="form__fieldset">
                      <div className="form__field">
                          <label htmlFor="firstName">First Name *</label>
                          <input className="form__input" type="text" name="firstName" />
                      </div>
                      <div className="form__field">
                          <label htmlFor="lastName">Last Name *</label>
                          <input className="form__input" type="text" name="lastName" />
                      </div>
                      <div className="form__field">
                          <label htmlFor="email">Email *</label>
                          <input className="form__input" type="text" name="email" />
                      </div>
                      <div className="form__field">
                          <label htmlFor="subject">Subject *</label>
                          <input className="form__input" type="text" name="subject" />
                      </div>
                      <div className="form__field">
                          <label htmlFor="message">Message *</label>
                          <textarea className="form__input form__textarea" name="message" rows="8"></textarea>
                      </div>
                      <div className="form__submit">
                          <button className="form__button" type="submit">Submit</button>
                      </div>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
      </div>
    );
  }
}
