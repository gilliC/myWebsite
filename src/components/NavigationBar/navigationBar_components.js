import React from 'react';
import styled, {keyframes} from 'styled-components';
import {primaryColor, secondaryColor} from '../../app_components';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import {NavLink} from 'react-router-dom';

let rightDistance = '40px';
let marginFromBottom = '-30px';

/////////////// ANIMATIONS /////////////

const brandHover = keyframes` 
  0% {
    font-size: 30px;
  }
  50% {
    font-size: 35px;
  }
  100% {
    font-size: 30px;
  }`;

const logoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const navHover = keyframes`
 from {
    border-bottom: solid ${primaryColor} 5px;
  }
  to {
    border-bottom: solid ${secondaryColor} 5px;
  }
`;

/////////////// NAVIGATION BRAND LEFT /////////////

const BrandNavLink = styled(NavLink)`
  padding-right: ${rightDistance};
  color: white;
  padding-bottom: 5px;
  margin: -20px;
  float: left !important;
  list-style-type: none;
  font-weight: bold;
  font-size: 30px !important;
  font-family: Abel;
  :any-link {
    color: white;
  }
  :hover {
    color: white;
    animation: ${brandHover} 2s ease forwards;
  }
`;

export const NavTabBrand = props => {
  return (
    <Navbar.Brand>
      <BrandNavLink to="/">
        Gilli <br /> Carmon
      </BrandNavLink>
    </Navbar.Brand>
  );
};
/////////////// LOGO /////////////
const LogoNavBar = styled(Navbar.Brand)`
  padding: 0;
`;
const LogoNav = styled(Nav)`
  background-color: inherit;
  list-style-type: none;
  margin: ${marginFromBottom};
  float: right !important;
`;
const LogoImg = styled.img`
  height: 100px;
  :hover {
    animation: ${logoSpin} infinite 3s linear;
  }
`;

export const LogoTab = props => {
  return (
    <LogoNavBar>
      <LogoNav>
        <LogoImg alt="logo" {...props} />
      </LogoNav>
    </LogoNavBar>
  );
};
/////////////// NAVIGATION TAB ITEM/////////////
export const NavTabItem = styled(Nav)`
  height: 50px;
  margin-right: ${rightDistance};
  list-style-type: none;
  text-align: center;
  border-bottom: ${props =>
    props.isactivepage ? `solid ${secondaryColor} 5px` : ''};
  :hover {
    border-bottom: solid ${primaryColor} 5px;
    animation: ${navHover} 1s ease forwards;
  }
`;
