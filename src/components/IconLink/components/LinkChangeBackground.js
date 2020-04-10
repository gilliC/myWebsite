import styled from "styled-components";
import { tertiaryColor } from "../../../consts/colorsPalette";
import { mobileSize } from "../../../consts/screenSizes";

export default styled.a`
  :any-link {
    width: ${(props) => props.width || "100%"};
    color: ${tertiaryColor};
    font-size: 7em;
    flex:1;
  }
  :hover {
    color: ${tertiaryColor};
    opacity: 0.5;
    transition: 0.5s;
  }
  @media screen and (max-width: ${mobileSize + "px"}) {
    :any-link {
      height: 50px;
      font-size: 3.5em;
      margin: 5px;
    }
  }
`;