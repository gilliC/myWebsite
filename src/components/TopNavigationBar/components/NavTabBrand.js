import React from "react";
import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";

const brandHover = keyframes` 
  0% {
    font-size: 20px;
  }
  50% {
    font-size: 25px;
  }
  100% {
    font-size: 20px;
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
  font-size: 20px;
  :hover {
    animation: ${brandHover} 2s ease forwards;
  }
`;
