import styled, { keyframes } from "styled-components";
import { BLACK_LIGHT, BLACK_DARK } from "../../../consts/colorsPalette";

const icons_grown = keyframes` 
 from {
    font-size: 7em;
  }
  to {
    font-size: 8em;
    color: ${BLACK_DARK};
  }`;
const icons_shrink = keyframes`
  from {
    font-size: 8em;
    color: ${BLACK_LIGHT};
  }
  to {
    font-size: 7em;
  }`;

export default styled.a`
  :any-link {
    width: ${(props) => props.width || "100%"};
    color: ${BLACK_LIGHT};
    animation: ${icons_shrink} 1s ease forwards;
    font-size: 7em;
    height: 100px;
    margin: 40px;
  }
  :hover {
    animation: ${icons_grown} 1s ease forwards;
  }
`;
