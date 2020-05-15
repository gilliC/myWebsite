import styled from "styled-components";
import { TEXT_BLACK } from "../colorsPalette";

export default styled.h1`
  font-family: "Poppins";
  font-size: ${(props) => props.fontSize || "24px"};
  font-weight: 600;
  color: ${TEXT_BLACK};
`;
