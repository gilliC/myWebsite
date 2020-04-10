import styled from "styled-components";
import { primaryColor } from "../../../../../consts/colorsPalette";

export default styled.div`
  border: solid 5px ${primaryColor};
  max-width:650px;
  width: 80%
  box-shadow: 2px 5px ${primaryColor};
  align-self: center;
  margin:20px 0;
  min-height: 470px;
`;
