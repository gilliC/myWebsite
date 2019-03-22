import React from 'react';
import styled, {keyframes} from 'styled-components';
import * as Scroll from 'react-scroll';
import {animateScroll as scroll} from 'react-scroll';

import {FullHeightDiv} from '../../components/common_components';
import {
  primaryColor,
  secondaryColor,
  tertiaryColor,
} from '../../app_components';
export default props => {
  if (props.isInMobile) {
    return (
      <div>
        <BoldText color={primaryColor}>
          Hi, my name is Gilli, I'm a web & mobile developer from Israel.
        </BoldText>
        <Text color={primaryColor}>
          I'm a junior & enthusiastic programmer, looking for some new projects
          to work on. I enjoy what I do, which promises great results. I have
          taught myself React, React Native and Python. I'm serious and open
          minded to learn new things. I have also learned c# & Java, but most of
          my work focuses on websites and mobile application.
        </Text>
      </div>
    );
  } else {
    return (
      <AboutMeDiv>
        <RowContainer>
          <LeftSideDiv>
            <table>
              <tbody>
                <tr>
                  <td colSpan="2">
                    <Icon className="fas fa-desktop" />
                  </td>
                  <td colSpan="2">
                    <Icon className="fas fa-mobile-alt" />
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <Text>Web</Text>
                  </td>
                  <td colSpan="2">
                    <Text>Mobile</Text>
                  </td>
                </tr>
                <tr>
                  <td colSpan="4">
                    <BoldText>
                      Hi, my name is Gilli, I'm a web & mobile developer from
                      Israel.
                    </BoldText>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Icon className="fab fa-react" />
                  </td>
                  <td>
                    <Icon className="fab fa-python" />
                  </td>
                  <td>
                    <Icon className="fab fa-java" />
                  </td>
                  <td>
                    <Icon className="fab fa-js" />
                  </td>
                </tr>
              </tbody>
            </table>
          </LeftSideDiv>
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
      </AboutMeDiv>
    );
  }
};

const icons_grow = keyframes` 
 0% {
    font-size: 5em;
  }
  50% {
    font-size: 6em;
  }
100%{
font-size:5em;
}
`;
const icon_slide_down = keyframes` 
 0% {
    transform:translateY(0px);
    opacity:1;
  }
  15%{
   transform:translateY(25px);
    font-size:2em;
    opacity:0.3

  }
 25% {
    transform:translateY(50px);
    font-size:2em;
    opacity:0.3
  }
 50%{
    transform:translateY(0px);
    font-size:5em;
    opacity:1;
  }
 100%{
    transform:translateY(0px);
    opacity:1;
  }
`;

const Icon = styled.i`
  color: white;
  font-size: 5em;
  flex: 1;
  animation: ${icons_grow} 1s ease;
`;
const ScrollDownIcon = styled.i`
  color: white;
  font-size: 5em;
  cursor: pointer;
  animation: ${icon_slide_down} 2s ease infinite;
`;
const RowContainer = styled.div`
  display: flex;
  padding: 100px;
  height: 90%;
`;
const AboutMeDiv = styled.div`
  min-height: 80vh;
  background-color: ${props => (props.isInMobile ? 'none' : primaryColor)};
`;

const LeftSideDiv = styled.div`
  width: 50%;
  flex: 1;
  float: left;
  margin-right: 30px;
`;

const RightSideDiv = styled.div`
  width: 50%;
  flex: 1;
  float: right;
  margin-right: 30px;
  justify-content: center;
  display: flex;
  align-items: center;
  border-style: double;
  border-width: 7px;
  border-color: rgba(255, 255, 255, 0.3);
`;
const Text = styled.p`
  padding: 20px;
  color: ${props => props.color || 'inherient'};
  font-size: 2em;
  text-align: center;
  font-family: Poiret One;
`;
const BoldText = styled.p`
  flex: 1;
  color: ${props => props.color || 'inherient'};
  font-weight: bold;
  font-size: 3.5em;
  font-family: Abel;
`;
