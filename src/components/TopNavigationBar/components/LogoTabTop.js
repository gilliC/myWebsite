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
  return (
    <Container>
      <LogoImg alt="logo" src={logo} />
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
  background-color:yellow;
`;

const LogoImg = styled.img`
  height: 100px;
  :hover {
    animation: ${logoSpin} infinite 3s linear;
  }
  @media (max-width: ${mobileSize + "px"}) {
    height: 50px;
  }
`;
