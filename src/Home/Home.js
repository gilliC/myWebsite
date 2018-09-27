import React, {Component} from 'react';

import HomePageBody from './HomePageBody';

import './Home.scss';

class HomeComponent extends Component {
  render() {
    return (
      <div className="outline">
        <HomePageBody />
      </div>
    );
  }
}

export default HomeComponent;
