import React from "react";
import styled, { keyframes } from "styled-components";
import logo from "../../../drawable/websiteLogo.png";
import { mobileSize } from "../../../consts/screenSizes";

const logoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export default () => {
  return <LogoImg alt="logo" src={logo} />;
};

const LogoImg = styled.img`
  flex: 1;
  height: 100px;
  :hover {
    animation: ${logoSpin} infinite 3s linear;
  }
  @media (max-width: ${mobileSize + "px"}) {
    height: 50px;
  }
`;
