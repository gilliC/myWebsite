import styled from 'styled-components';
import { primaryColor } from "../../../../../app_components";

// TO-DO delete margin top and fix space
export default styled.div`
  height: 95vh;
  background-color: ${primaryColor};
  margin-top:-10px; 
  clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
`;

