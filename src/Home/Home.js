import React, {Component} from 'react';

import AnimatedWrapper from '../components/AnimatedWrapper';
import HomePageBody from './HomePageBody';

import './HomeStyle.css';

class HomeComponent extends Component {
  render() {
    return (
      <div>
        <HomePageBody />
      </div>
    );
  }
}

const Home = AnimatedWrapper(HomeComponent);
export default Home;
