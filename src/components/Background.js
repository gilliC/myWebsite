import React from 'react';
import styled from 'styled-components';
import {primaryColor, secondaryColor, tertiaryColor} from '../app_components';

export default props => {
  return (
    <BackgroundContainer>
      <BackgroundinContainer>{props.children}</BackgroundinContainer>
    </BackgroundContainer>
  );
};

const BackgroundContainer = styled.div`
  align-content: center;
  align-self: center;
  justify-content: center;
  align-items: center;
  display: flex;
  justify-content: center;
  display: -webkit-flex;
  -webkit-align-items: center;
  flex-direction: column;
  text-align: center;
  font-family: Lucida Sans Unicode, Lucida Grande, sans-serif;
  cursor: default;
  height: 100%;
`;
const BackgroundinContainer = styled.div`
  cursor: default;
  height: 70%;
  width: 70%;
  color: white;
  background-color: ${primaryColor};
`;
