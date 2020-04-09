import styled from "styled-components";

export default styled.div`
  flex: ${props => props.flex || 1 };
  display: flex;
  flex-direction: row;
`;
