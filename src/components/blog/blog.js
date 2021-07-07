import React, { Component } from 'react';
import './blog.css';

import DummyService from '../../services/dummy-service';


export default class App extends Component {
  
  state = {
      items: []
  }

  componentDidMount() {
    this.dummyService.getAllCards()
        .then((data) => {
            this.setState({
                items: data
            })
        })
        .catch((err) => console.log(err))
  } 

  dummyService = new DummyService();

  render() {

    const items = this.state.items;
    const cards = items.map((item) => {
        
        const divStyle = {
            backgroundImage: 'url(' + item.imgUrl + ')'
        }

        return (
            <div key={item.id} className="card">
                <div className="card__img" style={divStyle}></div>
                <div className="card__inner">
                    <h3>{item.heading}</h3>
                    <p>{item.text}</p>
                </div>
            </div>
        )
    })

    return (
      <div className="blog">
          <h2>MY BLOG</h2>
          <div className="container blog__container">
              <div className="blog__inner">
                {cards}
              </div>
          </div>
      </div>
    );
  }
}
