import styled from "styled-components";
import { mobileSize } from "../../consts/screenSizes";
import { BLACK_DARK } from "../../consts/colorsPalette";

export default styled.p`
  font-size: ${(props) => props.fontSize || "1em"};
  text-align: ${(props) => props.textAlign || "center"};
  font-family: ${(props) => props.fontFamily || "Amatic SC"};
  color: ${(props) => props.color || BLACK_DARK};
  @media screen and (max-width: ${mobileSize + "px"}) {
    font-size: 1em;
  }
`;
