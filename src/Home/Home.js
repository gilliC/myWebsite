import React from 'react';
import styled from 'styled-components';

import {primaryColor} from '../components/general_components';

import HomePageBody from './HomePageBody';

export default props => {
  return (
    <HomeContainer>
      <HomePageBody />
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  border: solid ${primaryColor} 20px;
  height: 100%;
  h1 {
    font-family: 'Amatic SC';
    font-size: 65px;
  }
`;
