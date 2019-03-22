import React from 'react';
import styled from 'styled-components';
import Contact from './Contact';
import AboutMe from './AboutMe';
import {primaryColor, mobileSize} from '../../app_components';

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

const HomeContainer = styled.div`
  min-height: 80vh;
  color: white;
  h1 {
    font-family: Amatic SC;
    font-size: 65px;
  }
`;
