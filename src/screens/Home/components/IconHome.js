import styled, { keyframes } from "styled-components";

export const icons_grow = keyframes` 
 0% {
    font-size: 5em;
  }
  50% {
    font-size: 6em;
  }
100%{
font-size:5em;
}
`;
export default styled.i`
  color: white;
  font-size: 5em;
  flex: 1;
  animation: ${icons_grow} 1s ease;
`;
