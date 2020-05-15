import styled from "styled-components";
import { TEXT_GRAY } from "../colorsPalette";

export default styled.p`
  font-family: "Poppins";
  font-size: ${(props) => props.fontSize || "18px"};
  color: ${TEXT_GRAY};
`;
