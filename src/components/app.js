import React, { Component } from 'react';
import moment from 'moment';

import PorfolioContainer from './portfolio/portfolio-container';
import PorfolioContainer from './NavigationContainer/navigation-container';

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
