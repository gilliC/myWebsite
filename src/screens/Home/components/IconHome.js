import styled, { keyframes } from "styled-components";

export const icons_grow = keyframes` 
 0% {
    font-size: 4vw;
  }
  50% {
    font-size: 5vw;
  }
100%{
font-size:4vw;
}
`;
export default styled.i`
  font-size: 4vw;

  flex: 1;
  align-self:center;

  animation: ${icons_grow} 1s ease;
`;
