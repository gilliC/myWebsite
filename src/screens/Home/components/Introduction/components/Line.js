import styled from "styled-components";
import { PRIMARY_COLOR } from "common/colorsPalette";

export default styled.hr`
  flex: 1;
  align-self: center;
  border-top-color: ${PRIMARY_COLOR};
  border-top-width: thin;
  border-radius: 50px;
`;
