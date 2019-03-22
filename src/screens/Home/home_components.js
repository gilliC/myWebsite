import styled, {keyframes} from 'styled-components';
import {primaryColor} from '../../app_components';

export const HomeContainer = styled.div`
  min-height: 80vh;
  color: white;
  h1 {
    font-family: Amatic SC;
    font-size: 65px;
    margin: 0;
  }
`;

export const icons_grow = keyframes` 
 0% {
    font-size: 5em;
  }
  50% {
    font-size: 6em;
  }
100%{
font-size:5em;
}
`;
export const icon_slide_down = keyframes` 
 0% {
    transform:translateY(0px);
    opacity:1;
  }
  15%{
   transform:translateY(25px);
    font-size:2em;
    opacity:0.3

  }
 25% {
    transform:translateY(50px);
    font-size:2em;
    opacity:0.3
  }
 50%{
    transform:translateY(0px);
    font-size:5em;
    opacity:1;
  }
 100%{
    transform:translateY(0px);
    opacity:1;
  }
`;

export const Icon = styled.i`
  color: white;
  font-size: 5em;
  flex: 1;
  animation: ${icons_grow} 1s ease;
`;
export const ScrollDownIcon = styled.i`
  color: white;
  font-size: 5em;
  cursor: pointer;
  animation: ${icon_slide_down} 2s ease infinite;
`;
export const RowContainer = styled.div`
  display: flex;
  padding: 100px;
  height: 90%;
`;
export const AboutMeDiv = styled.div`
  min-height: 80vh;
  background-color: ${props => (props.isInMobile ? 'none' : primaryColor)};
`;

export const LeftSideDiv = styled.div`
  width: 50%;
  flex: 1;
  float: left;
  margin-right: 30px;
`;

export const RightSideDiv = styled.div`
  width: 50%;
  flex: 1;
  float: right;
  margin-right: 30px;
  justify-content: center;
  display: flex;
  align-items: center;
  border-style: double;
  border-width: 7px;
  border-color: rgba(255, 255, 255, 0.3);
`;
export const Text = styled.p`
  padding: 20px;
  color: ${props => props.color || 'inherient'};
  font-size: 2em;
  text-align: center;
  font-family: Poiret One;
`;
export const BoldText = styled.p`
  flex: 1;
  color: ${props => props.color || 'inherient'};
  font-weight: bold;
  font-size: 3.5em;
  font-family: Abel;
`;
