import styled, {keyframes} from 'styled-components';

import {primaryColor, mobileSize} from '../app_components';
import {Title} from '../components/common_components';

///////////// ANIMATIONS /////////
const linkItem_hovering = keyframes` 
 from {
    box-shadow: 1px 7px 5px 3px transparent;
  }
  to {
    box-shadow: 1px 7px 5px 3px ${primaryColor};
  }`;

///////////// DIVS /////////

export const LinksContainer = styled.div`
  padding-top: 20px;
  flex-direction: row;
  display: flex;
  justify-content: center;
  display: -webkit-flex;
`;

export const LinksListContainer = styled.div`
  margin-left: 20px;
  border-radius: 10px;
  width: 300px;
  padding: 20px;
  float: left;
  @media screen and (max-width: ${mobileSize + 'px'}) {
    width: 150px;
  }
`;

export const ArticleItemContainer = styled.div`
  border-bottom: solid ${primaryColor} 2px;
  padding: 10px;
  cursor: pointer;
  color: ${props => (props.active ? primaryColor : 'inherit')};
  border-bottom: ${props => (props.active ? `solid ${primaryColor} 2px` : '')};
  animation-name: ${props => (props.active ? linkItem_hovering : '')};
  animation-duration: 1.5s;
  animation-fill-mode: forwards;

  :hover {
    cursor: pointer;
    color: ${primaryColor};
    border-bottom: solid ${primaryColor} 2px;
    padding: 10px;
    animation: ${linkItem_hovering} 1s ease forwards;
  }
  @media screen and (max-width: ${mobileSize + 'px'}) {
  }
`;

///////////// TEXT /////////
export const LinkText = styled.p`
  text-align: center;
  font-family: Abel;
  color: black;
  :hover {
    color: ${primaryColor};
  }
  @media screen and (max-width: ${mobileSize + 'px'}) {
    font-size: 0.5em !important;
  }
`;

export const LinkTextSpan = styled.span`
  text-align: center;
  font-family: Abel;
  color: darkgrey;
  :hover {
    color: ${primaryColor};
  }
`;

export const ListActiveTitle = styled(Title)`
  font-family: Abril Fatface;
`;
