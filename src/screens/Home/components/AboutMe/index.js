import React from 'react';
import {animateScroll as scroll} from 'react-scroll';

import {
  Text,
  RowContainer,
  RightSideDiv,
  ScrollDownIcon,
} from '../../home_components';
import AboutMeMobile from './components/AboutMeMobile';
import AboutMeContainer from './components/AboutMeContainer';
import AboutMeLeft from './components/AboutMeLeft';

export default props => {
  if (props.isInMobile) {
    return <AboutMeMobile />
  } else {
    return (
      <AboutMeContainer>
        <RowContainer>
          <AboutMeLeft />
          <RightSideDiv>
            <Text>
              I'm a junior & enthusiastic programmer, looking for some new
              projects to work on. I enjoy what I do, which promises great
              results. I have taught myself React, React Native and Python. I'm
              serious and open minded to learn new things. I have also learned
              c# & Java, but most of my work focuses on websites and mobile
              application.
            </Text>
          </RightSideDiv>
        </RowContainer>
        <ScrollDownIcon
          onClick={() => {
            scroll.scrollToBottom();
          }}
          className="fas fa-chevron-down"
        />
      </AboutMeContainer>
    );
  }
};
