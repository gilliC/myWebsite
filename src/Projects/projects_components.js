import styled from 'styled-components';
import {primaryColor, mobileSize} from '../app_components';

////////////// CONTAINERS /////////////
export const CardContainerDesktop = styled.div`
  border-style: solid;
  border-width: 5px;
  border-color: ${primaryColor};
  min-width:800px;
  width: 60%
  box-shadow: 5px 10px ${primaryColor};
  align-self: center;
  margin-top:20px;
  margin-bottom:20px;
  min-height: 470px;
`;
export const CardContainerMobile = styled.div`
  border-style: solid;
  border-width: 5px;
  border-color: ${primaryColor};
  max-width:650px;
  width: 80%
  box-shadow: 2px 5px ${primaryColor};
  align-self: center;
  margin-top:20px;
  margin-bottom:20px;
  min-height: 470px;
`;

export const InformationContainer = styled.div`
  align-self: normal;
`;

////////////// GIFS /////////////
export const Gif = styled.img`
  margin: 10px;
  @media screen and (max-width: ${mobileSize}) {
    height: 200px;
  }
`;
