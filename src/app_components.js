import React from 'react';
import styled from 'styled-components';
import {TransitionGroup} from 'react-transition-group';
import transition from 'styled-transition-group';

const appColors = {
  primaryColor: '#5e82bc',
  secondaryColor: 'white',
  tertiaryColor: '#9e788f',
};
export const {primaryColor, secondaryColor, tertiaryColor} = appColors;

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
  background-color: ${primaryColor};
  height: 20%;
  padding: 20px;
  color: ${secondaryColor};
  text-align: center;
  position: sticky;
  top: 0px;
  z-index: 99;
`;

const AppBodyTGroup = styled(TransitionGroup)`
  height: 80%;
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
