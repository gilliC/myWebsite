import styled, { keyframes } from "styled-components";
import { PRIMARY_COLOR } from "common/colorsPalette";

const slide = keyframes`
0% {
  transform: scale(1);
  padding-left: 0;
}
25% {
  transform: scale(1.1);
  padding-left: 30px;
}
50% {
  transform: scale(1);
  padding-left: 0;
}

100% {
  transform: scale(1);
  padding-left: 0;
}
`;

export default styled.button`
  padding: 15px 40px;
  width: 30vh;
  border: solid 1px ${PRIMARY_COLOR};
  justify-content: center;
  flex-direction: row;
  display: flex;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  border-radius: 9px;
  :hover {
    .email-arrow-icon {
      animation: ${slide} 2s infinite;
    }
  }

  .email-arrow-icon {
    width: 20%;
  }
`;
