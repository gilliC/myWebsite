import styled from "styled-components";
import { tertiaryColor } from "../../../app_components";

export default styled.div`
  height: 25vh;
  background-color: ${tertiaryColor};
  margin-top:-10px; 
  clip-path: polygon(0 0, 100% 50%, 100% 100%, 0 100%);
`;
