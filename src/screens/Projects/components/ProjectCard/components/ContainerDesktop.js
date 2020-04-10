import React from "react";
import styled from "styled-components";
import ContainerRow from "../../../../../components/ContainerRow";
import { tertiaryColor } from "../../../../../consts/colorsPalette";

export default (props) => {
  return (
    <CardContainerDesktop>
      <ContainerRow>{props.children}</ContainerRow>
    </CardContainerDesktop>
  );
};

const CardContainerDesktop = styled.div`
  border-style: solid;
  border-width: 5px;
  border-color: ${tertiaryColor};
  border-radius: 5px;

  min-height: 470px;
  min-width:800px;
  width: 60%

  align-self: center;

  margin: 20px 0;
  padding: 2px 16px;

  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
`;
