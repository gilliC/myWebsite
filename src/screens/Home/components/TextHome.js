import styled from "styled-components";

export default styled.p`
  flex: 1;
  padding: 20px;

  color: ${(props) => props.color || "inherient"};
  font-size: 2em;
  font-family: Poiret One;
  text-align: center;
`;
