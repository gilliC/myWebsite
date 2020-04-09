import React from 'react';
import {animateScroll as scroll} from 'react-scroll';

import {
  BoldText,
  Text,
  AboutMeDiv,
  RowContainer,
  LeftSideDiv,
  RightSideDiv,
  ScrollDownIcon,
  Icon,
} from '../../home_components';
import {primaryColor} from '../../../../app_components';
import AboutMeMobile from './components/AboutMeMobile';
export default props => {
  if (props.isInMobile) {
    return <AboutMeMobile />
  } else {
    return (
      <AboutMeDiv>
        <RowContainer>
          <LeftSideDiv>
            <table>
              <tbody>
                <tr>
                  <td colSpan="1">
                    <Icon className="fas fa-desktop" />
                  </td>
                  <td colSpan="2">
                    <h1>&</h1>
                  </td>
                  <td colSpan="1">
                    <Icon className="fas fa-mobile-alt" />
                  </td>
                </tr>
                <tr>
                  <td colSpan="1">
                    <Text>Web</Text>
                  </td>
                  <td colSpan="2" />
                  <td colSpan="1">
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
                    <Icon className="fab fa-react" title="react" />
                  </td>
                  <td>
                    <Icon className="fab fa-python" title="python" />
                  </td>
                  <td>
                    <Icon className="fab fa-java" title="java" />
                  </td>
                  <td>
                    <Icon className="fab fa-js" title="javascript" />
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
