import styled from "styled-components";
import { PRIMARY_COLOR } from "common/colorsPalette";

export default styled.button`
  padding: 15px 40px;
  border: solid 1px ${PRIMARY_COLOR};
  align-items: center;
  justify-content: center;
  flex-direction: row;
  display: flex;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  border-radius: 9px;
`;
