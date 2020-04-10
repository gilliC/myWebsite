import styled from "styled-components";
import { mobileSize } from "../../../consts/screenSizes";

export default styled.div`
  min-width: 400px;

  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: ${mobileSize + "px"}) {
    min-width: 0px;
  }
`;
