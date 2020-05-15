import React from "react";
import styled from "styled-components";
import Title from "common/text/Title";

export default () => (
  <StyledText>Email Me</StyledText>
);

const StyledText = styled(Title)`
  font-style: italic;
  font-size: 18px;
  margin: 0;
`;
