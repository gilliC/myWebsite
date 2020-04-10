import styled from "styled-components";
import { mobileSize } from "../../../../../consts/screenSizes";

export default styled.img`
  margin: 10px;
  @media screen and (max-width: ${mobileSize + "px"}) {
    height: 200px;
  }
`;
