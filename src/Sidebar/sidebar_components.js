import styled from 'styled-components';
import {primaryColor, mobileSize} from '../app_components';

/////////////// DIVS /////////////
export const SideBarContainer = styled.div`
  height: 100%;
  background-color: ${primaryColor};
  display: block;
  padding: 0;
  padding-top: 20px;
  margin: 0;
  position: relative;
  z-index: 1;

  li,
  a,
  li:after,
  a:after,
  li:before,
  a:before {
    transition: all 700ms;
  }
`;
export const LinkContainer = styled.li`
  flex-direction: row;
  align-items: center;
  -webkit-align-items: center;
  list-style-type: none;
  display:flex;
  justify-content:center;
  padding-top:20px;
    a {
    text-decoration: none;
    width: 100%; 
    padding:0;
  }
    }

`;
export const LinkTitle = styled.h3`
  color: white;
  font-family: Abel;
  text-align: center;
  padding-bottom: 10px;
  margin: 0;
  padding: 0;
  @media (max-width: ${mobileSize}) {
    font-size: 15px;
  }
`;
