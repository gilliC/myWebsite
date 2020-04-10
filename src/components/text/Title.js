import styled from 'styled-components';
import { mobileSize } from '../../consts/screenSizes';

export default styled.h1`
  font-size: ${(props) => props.fontSize || "5em"};
  text-align: ${(props) => props.textAlign || "center"};
  font-family: ${(props) => props.fontFamily || "Amatic SC"};
  color: ${(props) => props.color || "black"};
  @media screen and (max-width: ${mobileSize+ "px"}) {
    font-size: 1em;
  }
`;
