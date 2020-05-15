import styled, { keyframes } from "styled-components";
import { PRIMARY_COLOR } from "common/colorsPalette";

const fromLeftToRight = keyframes`
from {
  width: 0;
  overflow: hidden;

}
to {
  width: 100%;
  overflow: visible;
}
`;

export default styled.div`
  flex: 1;
  margin-right: 35px;
  :after {
    display: block;
    content: "";
    border-top: solid 3px ${PRIMARY_COLOR};
    width: 0;
    transform: translateY(-50px);
    animation: ${fromLeftToRight} 2.5s forwards;
  }
  p {
    animation: ${fromLeftToRight} 2s forwards;
  }
`;
