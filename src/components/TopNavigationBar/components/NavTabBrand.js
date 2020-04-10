import React from "react";
import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";

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

export default () => {
  return (
    <BrandNavLink to="/">
      Gilli <br /> Carmon
    </BrandNavLink>
  );
};

const BrandNavLink = styled(NavLink)`
  flex: 1;
  :hover {
    animation: ${brandHover} 2s ease forwards;
  }
`;
