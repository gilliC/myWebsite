import styled from "styled-components";

export default styled.p`
  flex: 1;
  color: ${(props) => props.color || "inherient"};
  font-weight: bold;
  font-size: 3.5em;
  font-family: Abel;
`;
