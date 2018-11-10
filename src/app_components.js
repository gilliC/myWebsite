import styled from 'styled-components';
import {TransitionGroup} from 'react-transition-group';

export const primaryColor = '#5e82bc';
export const secondaryColor = 'white';
export const tertiaryColor = '#9e788f';

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

export const AppBody = styled(TransitionGroup)`
  height: 80%;
`;
