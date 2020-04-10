import React from "react";
import styled from "styled-components";
import { primaryColor } from "../../../consts/colorsPalette";
import { mobileSize } from "../../../consts/screenSizes";

const Arrow = styled.i`
  font-size: 4em;
  color: ${primaryColor};
  align-self: center;
  @media screen and (max-width: ${mobileSize + "px"}) {
    font-size: 1em;
  }
`;
const ArrowContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export default (props) => {
  const { className, dataName, onClick } = props;
  return (
    <ArrowContainer onClick={onClick} data-name={dataName}>
      <Arrow className={className} size="7px" />
    </ArrowContainer>
  );
};
