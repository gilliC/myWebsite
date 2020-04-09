import React from 'react';
import Contact from './Contact';
import AboutMe from './components/AboutMe';
import {mobileSize} from '../../app_components';
import {HomeContainer} from './home_components';

export default props => {
  let isInMobile = false;
  if (props.screenSize <= mobileSize) isInMobile = true;
  return (
    <HomeContainer isInMobile={isInMobile}>
      <AboutMe isInMobile={isInMobile} />
      <Contact isInMobile={isInMobile} />
    </HomeContainer>
  );
};
