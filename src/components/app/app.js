import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './app.css';

import DummyService from '../../services/dummy-service';

import { BlogPage, HomePage, PortfolioPage, AboutPage, ContactPage } from '../pages';
import { DummyServiceProvider } from '../dummy-service-context';

export default class App extends Component {
  
  state = {
    dummyService: new DummyService()
  };

  render() {

    return (
      <DummyServiceProvider value={this.state.dummyService} >
        <Router>
          <div className="app">

            <Switch>

              <Route path="/" component={HomePage} exact />
              <Route path="/portfolio" component={PortfolioPage} />
              <Route path="/about" component={AboutPage} />
              <Route path="/blog" component={BlogPage} />
              <Route path="/contact" component={ContactPage} />

              <Route path='/pinterest' component={() => { window.location.href = 'https://www.pinterest.com/' }}/>
              <Route path='/facebook' component={() => { window.location.href = 'https://www.facebook.com/' }}/>
              <Route path='/twitter' component={() => { window.location.href = 'https://www.twitter.com/' }}/>
              <Route path='/instagram' component={() => { window.location.href = 'https://www.instagram.com/' }}/>
                  
            </Switch>

          </div>
        </Router>
      </DummyServiceProvider>
    );
  }
}
