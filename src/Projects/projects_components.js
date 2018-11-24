import styled from 'styled-components';
import {primaryColor} from '../app_components';

////////////// CONTAINERS /////////////
export const CardContainer = styled.div`
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

export const InformationContainer = styled.div`
  align-self: normal;
`;

////////////// GIFS /////////////
export const Gif = styled.img`
  margin: 10px;
`;
