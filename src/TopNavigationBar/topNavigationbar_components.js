import React from 'react';
import styled, {keyframes} from 'styled-components';
import {mobileSize} from '../app_components';
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
export const LogoImg = styled.img`
  height: 100px;
  align-self: center;
  display: block;
  margin-left: auto;
  margin-right: auto;
  :hover {
    animation: ${logoSpin} infinite 3s linear;
  }
  @media (max-width: ${mobileSize}) {
    height: 50px;
  }
`;

export const LogoTabTop = props => {
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
    align-items: center;
  -webkit-align-items: center;
  list-style-type: none;
  display:flex;
  justify-content:center;
  margin-right: ${rightDistance};
  list-style-type: none;
  text-align: center;
  line{
  transform: ${props =>
    props.isactivepage ? 'translateX(70px)' : 'translateX(-70px)'};
    }
:hover {
      line {
        stroke-dasharray: 1000;
        stroke-dashoffset: 1000;
        animation: dashNav .25s linear forwards;
      }
    }
    @keyframes dashNav {
      from {
        stroke-dashoffset: 1000;
        transform: translateX(0px);
      }
      to {
        stroke-dashoffset: 0;
        transform: translateX(70px);
      }
    }
  }
  a {
    text-decoration: none;
    width: 100%; 
    padding:0;
  }
    }
  svg{
  margin-top:30px;
  position:absolute;
  }
`;
