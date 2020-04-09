import styled from "styled-components";
import { primaryColor, mobileSize } from "../../../../../app_components";
import EcoItemContainerImg, {
  borderRadius,
  defaultTipWidthMobile,
} from "./EcoItemContainerImg";

export const ColorLayer = styled.div`
  background-color: ${primaryColor};
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -3;
  border-radius: ${borderRadius};
  transition: background-color 500ms ease;

  ${EcoItemContainerImg}:hover {
    background-color: black;
    position: absolute;
    z-index: 5;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  @media screen and (max-width: ${mobileSize + "px"}) {
    width: ${defaultTipWidthMobile};
    position: absolute;
    z-index: 3;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;
