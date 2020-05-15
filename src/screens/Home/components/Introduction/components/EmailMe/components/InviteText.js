import React from "react";
import styled from "styled-components";
import Title from "common/text/Title";

export default () => (
  <StyledText>Interested in doing a project together?</StyledText>
);

const StyledText = styled(Title)`
  font-family: Poppins;
  font-size: 18px;
  font-weight: lighter;
  color: #000000;
  text-align: center;
`;
