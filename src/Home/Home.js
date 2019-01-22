import React from 'react';
import styled from 'styled-components';
import HomePageBody from './HomePageBody';

export default props => {
  return (
    <HomeContainer>
      <HomePageBody screenSize={props.screenSize} />
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  height: 100%;
  h1 {
    font-family: 'Amatic SC';
    font-size: 65px;
  }
`;
