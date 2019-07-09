import React, { Component } from 'react';
import moment from 'moment';

import PortfolioContainer from './portfolio/portfolio-container';
import PortfolioContainer from './navigation/navigation-container';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <NavigationContainer />
        <h1>Stella Schutjer Portfolio</h1>
        <div>{moment().format('MMMM Do YYYY, h:mm:ss a')}</div>
        <PorfolioContainer />
      </div>
    );
  }
}
