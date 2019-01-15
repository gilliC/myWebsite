import React from 'react';
import styled from 'styled-components';
import {TransitionGroup} from 'react-transition-group';
import transition from 'styled-transition-group';

const appColors = {
  primaryColor: '#5e82bc',
  secondaryColor: 'white',
  tertiaryColor: '#9e788f',
};
const screenSizes = {
  mobileSize: '768px',
};
export const {primaryColor, secondaryColor, tertiaryColor} = appColors;
export const {mobileSize} = screenSizes;

export function getWithOpacity(color, opacity) {
  if (typeof opacity !== 'number') return null;
  if (opacity > 1) return null;

  switch (color) {
    case 'primaryColor':
      return 'rgba(94,130,188,' + opacity + ')';

    case 'secondaryColor':
      return 'rgba(255,255,255,' + opacity + ')';

    case 'tertiaryColor':
      return 'rgba(158,120,143,' + opacity + ')';

    default:
      color = color.split(')');
      return 'rgba' + color[0] + ',' + opacity + ')';
  }
}

///////////// APP /////////

export const AppContainer = styled.div`
  text-align: center;
  font-family: Lucida Sans Unicode, Lucida Grande, sans-serif;
  align-content: center;
  cursor: default;
  height: 100%;
`;

export const HeaderContainer = styled.div`
  height: 20%;
  display: grid;
  position: sticky;
  top: 0px;
  z-index: 99;
  align-items: center;
  text-align: center;
  background-color: ${primaryColor};
  color: ${secondaryColor};
`;

const AppBodyTGroup = styled(TransitionGroup)`
  height: 80%;
  @media screen and (max-width: ${mobileSize}) {
    height: 100%;
  }
`;

const AppCSST = transition.div`
height:100%;
&:enter {
transform: translate(100%);
  }
  &:enter-active {
    transform: translate(0%);
  transition: all 1000ms ease-in-out;
    transition-duration:${props => props.timeout + 'ms' || '1000ms'}
  }
 &:leave {
  transform: translate(0%);
}
&:leave-active {
    transform: translate(-100%);
    transition: all 1000ms ease-in;
    transition-duration:${props => props.timeout + 'ms' || '1000ms'}
  }
`;

export const AppBody = props => {
  const {children, locationKey} = props;
  return (
    <AppBodyTGroup>
      <AppCSST
        {...props}
        key={locationKey}
        transitionEnterTimeout={1000}
        transitionLeaveTimeout={1000}>
        {children}
      </AppCSST>
    </AppBodyTGroup>
  );
};

export const AppSideContainr = styled(AppContainer)`
  width: ${props => (props.size ? (100 / 12) * props.size + '%' : '100%')};
  float: ${props => (props.float: 'none')};
  display: ${props => props.display || 'initial'};
  left: ${props => (props.left ? '0px' : 'auto')};
  right: ${props => (props.right ? '0px' : 'auto')};
  position: absolute;
  height: 100%;
  transition: all 1s;
`;

export const SidebarPush = styled.div`
  height: 100%;
  width: ${props => (props.size ? (100 / 12) * props.size + '%' : '100%')};
  min-width: 100px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
  transition: all 1s;
`;
